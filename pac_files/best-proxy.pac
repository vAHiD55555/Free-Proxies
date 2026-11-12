function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 216.22.13.47:1080",
        "SOCKS 42.114.69.56:20001",
        "SOCKS 87.242.118.172:2080",
        "SOCKS 69.174.54.224:10800",
        "SOCKS 93.90.231.101:1080",
        "SOCKS 94.228.245.10:1080",
        "SOCKS 193.124.15.177:60001",
        "SOCKS 45.74.31.40:5466",
        "SOCKS 31.220.40.59:5080",
        "SOCKS 91.199.209.112:1080",
        "SOCKS 83.147.18.168:1080",
        "SOCKS 39.104.23.154:3333",
        "SOCKS 45.74.31.42:5271",
        "SOCKS 212.87.198.147:1080",
        "SOCKS 45.74.31.41:9512",
        "SOCKS 94.124.160.136:1080",
        "SOCKS 45.74.31.41:10057",
        "SOCKS 2.50.191.129:10800",
        "SOCKS 58.187.44.103:1080",
        "SOCKS 31.58.144.15:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}