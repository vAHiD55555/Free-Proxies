function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.197:8889",
        "SOCKS 62.60.131.179:17118",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 110.74.195.34:25",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 5.61.62.24:8118",
        "SOCKS 36.255.98.160:5603",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 36.255.98.167:8045",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 203.189.153.168:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 212.2.248.245:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}