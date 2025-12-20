function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.93.213.242:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 123.57.0.163:8888",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 68.71.251.134:4145",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 117.74.65.207:443",
        "SOCKS 200.59.191.235:999",
        "SOCKS 72.10.160.171:25085",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 180.149.234.74:6214",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 128.140.76.145:14954",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 154.236.177.105:1976",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 67.201.58.190:4145",
        "SOCKS 120.77.203.0:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}