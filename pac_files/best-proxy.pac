function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 34.48.171.130:33080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 13.232.213.216:3128",
        "SOCKS 65.108.251.40:11107",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 8.208.94.223:3128",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 70.36.99.51:3128",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 159.89.98.131:3128",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 103.81.194.124:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}