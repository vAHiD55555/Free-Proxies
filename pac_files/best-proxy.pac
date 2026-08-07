function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.155.103.209:13579",
        "SOCKS 45.95.233.88:1082",
        "SOCKS 146.190.238.107:40001",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 47.250.11.111:8085",
        "SOCKS 183.101.185.89:20002",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 202.40.190.74:1080",
        "SOCKS 14.238.8.63:9090",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 72.56.106.48:1080",
        "SOCKS 109.164.35.23:8888",
        "SOCKS 113.160.188.21:1080",
        "SOCKS 34.69.61.247:80",
        "SOCKS 125.123.158.89:1181",
        "SOCKS 165.16.192.81:1080",
        "SOCKS 165.227.89.5:3128",
        "SOCKS 72.195.114.184:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}