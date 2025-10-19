function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.110:5566",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 185.93.89.146:18762",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 67.43.236.19:25371",
        "SOCKS 120.77.203.0:443",
        "SOCKS 152.53.171.242:18880",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 152.53.36.101:23853",
        "SOCKS 40.192.27.104:41",
        "SOCKS 14.239.102.60:1001",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 185.93.89.163:4026",
        "SOCKS 103.171.240.198:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}