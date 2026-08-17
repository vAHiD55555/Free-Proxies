function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 160.22.200.60:69",
        "SOCKS 118.145.141.251:44108",
        "SOCKS 85.193.65.88:8888",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 116.96.32.160:2080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 152.32.219.123:10808",
        "SOCKS 66.59.197.61:3128",
        "SOCKS 150.136.58.221:1080",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 85.198.82.207:1080",
        "SOCKS 59.38.113.185:20000",
        "SOCKS 8.217.112.43:1011",
        "SOCKS 58.144.196.192:39105",
        "SOCKS 8.211.170.91:14680",
        "SOCKS 103.197.242.95:1080",
        "SOCKS 154.18.239.181:8085",
        "SOCKS 147.45.72.212:44816",
        "SOCKS 118.70.67.11:1080",
        "SOCKS 144.124.232.204:5222",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}