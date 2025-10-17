function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.159.43:39019",
        "SOCKS 89.58.45.94:45908",
        "SOCKS 185.93.89.145:5344",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 89.58.45.94:32241",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 41.65.160.173:1976",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 185.93.89.182:8880",
        "SOCKS 185.93.89.158:19201",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 176.119.36.76:1081",
        "SOCKS 185.93.89.163:9055",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 185.93.89.182:4592",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}