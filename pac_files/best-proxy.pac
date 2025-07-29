function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.78.118.91:8561",
        "SOCKS 114.80.37.90:3081",
        "SOCKS 159.100.20.206:27866",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 103.214.102.172:8083",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 146.103.99.6:6588",
        "SOCKS 116.101.28.101:22661",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 193.151.129.143:8080",
        "SOCKS 171.228.175.152:1001",
        "SOCKS 1.54.237.20:16000",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 27.71.141.120:16000",
        "SOCKS 72.10.160.94:21851",
        "SOCKS 95.53.246.137:3128",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 47.243.75.202:58854",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}