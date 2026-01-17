function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.56.98:19190",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 78.12.223.246:2724",
        "SOCKS 67.43.228.252:10829",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 144.124.227.90:10808",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 178.49.22.23:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}