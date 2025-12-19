function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.205.215.44:4216",
        "SOCKS 45.89.55.177:60006",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 103.117.58.230:8085",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 63.151.67.7:8080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 72.10.160.91:13103",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 68.71.243.14:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}