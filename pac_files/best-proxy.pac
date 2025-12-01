function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.234.50.112:5516",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 152.53.36.101:32251",
        "SOCKS 171.238.102.99:1092",
        "SOCKS 171.238.103.65:1088",
        "SOCKS 94.25.35.236:3128",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 89.108.73.200:1080",
        "SOCKS 171.238.88.27:1072",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 103.54.217.82:8199",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 183.80.40.51:1111",
        "SOCKS 152.53.36.101:17129",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 171.238.89.141:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}