function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.173:19329",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 206.42.55.99:3128",
        "SOCKS 116.104.83.249:30019",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 179.96.28.58:80",
        "SOCKS 47.82.97.76:1111",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 173.209.63.67:8226",
        "SOCKS 18.188.141.177:8834",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 103.156.15.31:1111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}