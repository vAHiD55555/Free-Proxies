function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 131.153.163.84:58094",
        "SOCKS 45.74.31.46:9589",
        "SOCKS 148.230.66.125:1080",
        "SOCKS 202.65.208.244:10800",
        "SOCKS 45.10.41.194:1080",
        "SOCKS 27.69.77.5:1111",
        "SOCKS 210.76.192.133:10811",
        "SOCKS 118.71.227.154:1084",
        "SOCKS 213.230.121.41:1080",
        "SOCKS 223.25.109.74:8199",
        "SOCKS 88.201.235.205:10808",
        "SOCKS 91.240.122.28:1080",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 143.20.134.197:1080",
        "SOCKS 49.13.22.249:10805",
        "SOCKS 45.74.31.41:9643",
        "SOCKS 46.35.247.23:1080",
        "SOCKS 194.164.125.208:57422",
        "SOCKS 45.74.31.41:9711",
        "SOCKS 2.26.170.224:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}