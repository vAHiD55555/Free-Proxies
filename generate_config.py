#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import time
import base64
import random
from ipaddress import ip_network, ip_address

# ──────────────────────────────────────────────────────────────────────────────
# Configuration
# ──────────────────────────────────────────────────────────────────────────────

PROXIES_DUMP   = 'proxies_dump.json'
OUTPUT_PAC     = 'UK_generated.pac'
OUTPUT_CONFIG  = 'config_singbox.json'
MODES          = ['normal', 'obfuscated', 'extreme']

# Primary / Fallback nodes
CLOUDFLARE_PRIMARY = {
    "tag": "cf-primary",
    "type": "vless",
    "server": "cdn.cloudflare-proxy.site",
    "port": 443,
    "tls": { "enabled": True, "server_name": "cdn.cloudflare-proxy.site" }
}
FALLBACK_NODE = {
    "tag": "fallback-backup",
    "type": "vless",
    "server": "backup.germany-node.eu",
    "port": 443,
    "tls": { "enabled": True, "server_name": "backup.germany-node.eu" }
}

# Hosts / CIDRs to bypass
BYPASS_HOSTS     = ['localhost', '127.0.0.1', '::1']
BYPASS_IP_CIDRS  = ['127.0.0.0/8']

# ──────────────────────────────────────────────────────────────────────────────
# Utility Functions
# ──────────────────────────────────────────────────────────────────────────────

def load_proxies(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def encode_ip(ip, mode):
    """
    obfuscated: split into array and join in PAC
    extreme: base64 encode the whole string
    """
    if mode == 'obfuscated':
        parts = ip.split('.')
        return '" + '.join([f'"{p}"' for p in parts]) + ' + "'.join(['","."])'
    if mode == 'extreme':
        return base64.b64encode(ip.encode()).decode()
    return ip

# ──────────────────────────────────────────────────────────────────────────────
# PAC Generation
# ──────────────────────────────────────────────────────────────────────────────

def generate_pac(mode='normal'):
    proxies = load_proxies(PROXIES_DUMP)
    pac = []
    pac.append("function FindProxyForURL(url, host) {")
    # 1. Bypass localhost
    pac.append("  // Bypass local interfaces")
    for h in BYPASS_HOSTS:
        pac.append(f"  if (shExpMatch(host, '{h}')) return 'DIRECT';")
    for cidr in BYPASS_IP_CIDRS:
        net, mask = cidr.split('/')
        pac.append(f"  if (isInNet(host, '{net}', '{ip_network(cidr).netmask}')) return 'DIRECT';")
    pac.append("")
    # 2. Dynamic selector
    pac.append("  var now = new Date();")
    pac.append("  var hour = now.getHours();")
    pac.append("  var idx = (url.length + hour) % " + str(len(proxies)) + ";")
    pac.append("  var choice = proxies[idx];")
    pac.append("  return choice;")
    pac.append("}")
    pac.append("")
    # 3. Proxy list
    pac.append("// Proxy definitions")
    pac.append("var proxies = [")
    for p in proxies:
        ip_obf = encode_ip(p['address'], mode)
        entry = f"  '{p['protocol'].upper()} {ip_obf}:{p['port']}'"
        if mode == 'extreme':
            entry = f"  atob('{base64.b64encode(entry.encode()).decode()}')"
        pac.append(entry + ",")
    pac.append("];")

    with open(OUTPUT_PAC, 'w', encoding='utf-8') as f:
        f.write("\n".join(pac))
    print(f"[+] PAC file generated: {OUTPUT_PAC}")

# ──────────────────────────────────────────────────────────────────────────────
# Singbox Config Generation
# ──────────────────────────────────────────────────────────────────────────────

def generate_singbox_config(mode='normal'):
    proxies = load_proxies(PROXIES_DUMP)
    config = {
        "inbounds": [
            {
                "tag": "socks-in",
                "type": "socks",
                "listen": "127.0.0.1",
                "port": 1080
            }
        ],
        "outbounds": [CLOUDFLARE_PRIMARY, FALLBACK_NODE],
        "routing": {
            "rules": []
        }
    }

    # Bypass rules
    for h in BYPASS_HOSTS:
        config['routing']['rules'].append({
            "type": "domain",
            "domain": [h],
            "outbound": "direct"
        })
    for cidr in BYPASS_IP_CIDRS:
        config['routing']['rules'].append({
            "type": "ip_cidr",
            "ip_cidr": [cidr],
            "outbound": "direct"
        })

    # Catch-all → primary
    config['routing']['rules'].append({
        "type": "domain",
        "domain": ["*"],
        "outbound": CLOUDFLARE_PRIMARY['tag']
    })

    # Health-check probe
    config['routing']['rules'].append({
        "type": "probe",
        "interval": 300,
        "target": "https://cdn.cloudflare-proxy.site/status",
        "failure": {"outbound": FALLBACK_NODE['tag']}
    })

    # Obfuscation entry (extreme mode)
    if mode == 'extreme':
        for ob in config['outbounds']:
            ob['server'] = base64.b64encode(ob['server'].encode()).decode()

    with open(OUTPUT_CONFIG, 'w', encoding='utf-8') as f:
        json.dump(config, f, indent=2)
    print(f"[+] Singbox config generated: {OUTPUT_CONFIG}")

# ──────────────────────────────────────────────────────────────────────────────
# Entry Point
# ──────────────────────────────────────────────────────────────────────────────

if __name__ == '__main__':
    import sys

    mode = 'normal'
    if len(sys.argv) >= 2 and sys.argv[1] in MODES:
        mode = sys.argv[1]

    print(f"[*] Generation mode: {mode}")
    generate_pac(mode)
    generate_singbox_config(mode)
    print("[*] All done! You can load the files into your browser and Singbox.")

