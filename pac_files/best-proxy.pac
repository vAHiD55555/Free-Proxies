function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.236.190.197:1080",
        "SOCKS 8.220.141.8:4145",
        "SOCKS 38.55.145.46:1080",
        "SOCKS 218.52.249.121:1080",
        "SOCKS 43.155.232.123:1080",
        "SOCKS 103.66.46.150:69",
        "SOCKS 178.215.236.16:1080",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 89.113.99.195:1080",
        "SOCKS 47.82.112.38:1080",
        "SOCKS 185.245.183.130:8118",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 213.165.43.73:46650",
        "SOCKS 193.233.129.235:1080",
        "SOCKS 95.31.220.59:8080",
        "SOCKS 221.237.25.204:1080",
        "SOCKS 5.255.123.162:1080",
        "SOCKS 89.22.167.38:1080",
        "SOCKS 61.9.32.30:58765",
        "SOCKS 85.234.100.149:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}