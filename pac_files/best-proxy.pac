function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.126.203.139:10000",
        "SOCKS 151.241.14.37:1080",
        "SOCKS 31.56.78.41:1080",
        "SOCKS 45.74.31.30:4037",
        "SOCKS 145.220.227.243:8118",
        "SOCKS 100.36.219.18:1080",
        "SOCKS 101.73.55.242:1083",
        "SOCKS 123.203.138.220:1080",
        "SOCKS 8.209.212.84:1080",
        "SOCKS 43.163.219.10:20000",
        "SOCKS 78.110.158.176:1080",
        "SOCKS 216.236.6.203:7890",
        "SOCKS 174.136.204.111:10810",
        "SOCKS 109.123.251.109:1080",
        "SOCKS 219.128.23.208:10808",
        "SOCKS 43.163.81.35:1085",
        "SOCKS 45.74.31.46:4051",
        "SOCKS 116.48.170.221:11000",
        "SOCKS 159.89.51.75:10000",
        "SOCKS 82.139.234.160:1010",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}