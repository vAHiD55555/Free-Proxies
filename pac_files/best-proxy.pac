function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.254.99.183:8118",
        "SOCKS 190.122.88.116:6969",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 152.53.36.101:10065",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 45.115.114.57:9090",
        "SOCKS 202.58.77.77:1111",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 152.53.36.101:36973",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 152.53.36.101:20099",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 152.228.212.223:29272",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}