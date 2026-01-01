function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.4.192.62:7302",
        "SOCKS 193.233.254.8:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 41.65.160.173:1977",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 193.233.254.7:1080",
        "SOCKS 134.122.139.69:8866",
        "SOCKS 121.40.231.103:7890",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 195.162.19.75:80",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 120.224.234.71:7300",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}