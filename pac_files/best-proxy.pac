function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.89.113.155:8080",
        "SOCKS 103.126.87.181:7777",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 163.5.128.56:14270",
        "SOCKS 185.118.51.230:3128",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 116.111.99.220:10001",
        "SOCKS 40.177.106.156:8080",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 72.240.9.63:80",
        "SOCKS 159.8.114.37:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}