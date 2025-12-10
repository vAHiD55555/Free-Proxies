function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.172:17385",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 103.93.93.66:8080",
        "SOCKS 107.173.50.105:50005",
        "SOCKS 190.6.54.12:6969",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 103.28.121.58:80",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 72.10.160.173:8253",
        "SOCKS 18.141.177.23:80",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 15.206.25.229:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}