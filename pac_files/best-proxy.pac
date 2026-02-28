function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.224.234.71:7300",
        "SOCKS 14.56.118.184:3128",
        "SOCKS 124.248.190.48:1080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 101.32.52.39:7890",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 177.11.49.41:1088",
        "SOCKS 213.165.58.7:1080",
        "SOCKS 119.81.189.194:80",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 85.208.108.43:2094",
        "SOCKS 148.251.88.242:1080",
        "SOCKS 12.156.45.155:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}