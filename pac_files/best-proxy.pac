function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 135.181.203.208:80",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 217.144.187.208:8118",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 47.239.24.60:8888",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 173.209.63.67:8173",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 67.43.228.253:13271",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}