function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:33935",
        "SOCKS 8.218.225.27:1122",
        "SOCKS 8.218.56.130:1111",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 152.53.36.101:22381",
        "SOCKS 47.237.28.20:1100",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 157.180.121.252:15455",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 37.221.193.221:10070",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 152.53.36.101:17941",
        "SOCKS 103.148.112.69:8199",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 152.53.171.242:10301",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 176.74.197.163:36918",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}