function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.173:57114",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 47.236.37.129:18081",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 23.94.236.141:8080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 27.79.236.43:16000",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 188.227.224.110:9051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}