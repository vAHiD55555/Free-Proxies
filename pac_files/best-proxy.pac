function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.213.128.6:123",
        "SOCKS 103.88.234.239:40001",
        "SOCKS 92.101.193.58:1080",
        "SOCKS 185.133.239.244:16299",
        "SOCKS 49.0.0.175:1080",
        "SOCKS 104.161.23.122:5036",
        "SOCKS 212.77.75.25:1088",
        "SOCKS 13.140.164.179:3542",
        "SOCKS 59.152.97.233:1080",
        "SOCKS 47.252.11.233:10",
        "SOCKS 144.124.232.204:5222",
        "SOCKS 8.211.170.91:14680",
        "SOCKS 152.89.104.11:1080",
        "SOCKS 96.44.137.126:8118",
        "SOCKS 89.22.236.229:1080",
        "SOCKS 13.140.164.179:3705",
        "SOCKS 83.217.211.107:49210",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 103.151.74.5:2025",
        "SOCKS 8.213.128.6:8800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}