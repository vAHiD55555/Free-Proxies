function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.133.227.182:80",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 47.83.211.225:1100",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 185.211.59.154:80",
        "SOCKS 36.255.98.183:24518",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 178.62.116.7:1080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 103.28.121.58:80",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 45.151.182.9:3128",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 95.111.226.235:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}