function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.42.9.57:7201",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 124.6.51.226:8099",
        "SOCKS 42.193.101.38:1080",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 27.79.204.37:16000",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 47.91.120.190:9098",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 8.209.249.89:3128",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 54.180.143.12:1267",
        "SOCKS 200.174.198.86:8888",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 18.188.141.177:8834",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}