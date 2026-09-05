function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.25.215.182:22222",
        "SOCKS 36.137.204.11:1081",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 109.124.205.176:1080",
        "SOCKS 5.202.120.123:3128",
        "SOCKS 185.200.37.66:8080",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 45.74.31.30:10541",
        "SOCKS 160.250.54.7:9000",
        "SOCKS 198.15.30.50:8080",
        "SOCKS 5.253.59.150:1082",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 109.123.251.109:1080",
        "SOCKS 89.251.9.135:1080",
        "SOCKS 45.74.31.30:5067",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 103.142.190.78:10808",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 165.22.243.171:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}