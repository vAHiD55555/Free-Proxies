function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.224.234.71:7300",
        "SOCKS 177.234.194.31:999",
        "SOCKS 89.58.45.94:10442",
        "SOCKS 117.74.65.207:80",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 47.251.74.38:3128",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 200.10.31.202:999",
        "SOCKS 89.58.45.94:11693",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 120.77.203.0:443",
        "SOCKS 8.212.165.164:1080",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 209.141.58.213:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}