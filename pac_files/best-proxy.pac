function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.93.42.198:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 5.180.180.32:1080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 94.198.104.98:20000",
        "SOCKS 165.154.162.230:1080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 123.54.197.53:21819",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 193.216.224.108:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}