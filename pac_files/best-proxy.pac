function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 204.216.136.58:9050",
        "SOCKS 103.191.218.162:69",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 168.138.9.147:1080",
        "SOCKS 104.248.151.220:57554",
        "SOCKS 193.107.75.242:33500",
        "SOCKS 138.124.125.198:3128",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 31.25.236.95:1080",
        "SOCKS 178.156.206.253:8118",
        "SOCKS 45.77.155.196:50000",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 38.41.0.116:999",
        "SOCKS 177.10.66.14:1080",
        "SOCKS 125.24.156.113:7080",
        "SOCKS 221.176.85.227:1080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 160.250.54.7:9000",
        "SOCKS 134.175.238.113:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}