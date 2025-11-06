function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.221.193.221:12305",
        "SOCKS 152.53.171.242:59183",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 157.180.121.252:22311",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 38.123.220.173:999",
        "SOCKS 47.239.10.156:1100",
        "SOCKS 49.0.26.183:1080",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 37.221.193.221:25537",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 8.219.114.109:1100",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 58.186.169.150:2064",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 132.148.244.30:45157",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}