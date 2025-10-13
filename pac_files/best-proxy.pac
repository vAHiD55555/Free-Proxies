function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.211.194.85:4002",
        "SOCKS 38.194.224.134:1452",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 103.72.89.22:8097",
        "SOCKS 67.43.236.22:20051",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 8.219.172.7:1011",
        "SOCKS 92.242.184.2:4153",
        "SOCKS 103.227.187.13:6080",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 211.143.79.108:3128",
        "SOCKS 202.40.178.234:1080",
        "SOCKS 37.59.110.73:80",
        "SOCKS 190.153.237.6:37453",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 179.27.158.78:80",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 223.205.75.63:8080",
        "SOCKS 199.188.207.170:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}