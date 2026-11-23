function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.93.28.167:5555",
        "SOCKS 69.174.54.145:14434",
        "SOCKS 45.74.31.41:4241",
        "SOCKS 45.74.31.46:7504",
        "SOCKS 103.124.227.2:1083",
        "SOCKS 34.106.133.182:40001",
        "SOCKS 80.87.98.156:1080",
        "SOCKS 209.160.241.5:1080",
        "SOCKS 43.252.237.169:1080",
        "SOCKS 45.74.31.47:4257",
        "SOCKS 77.239.106.24:1080",
        "SOCKS 42.114.2.201:20001",
        "SOCKS 45.86.61.138:1080",
        "SOCKS 144.76.165.249:9050",
        "SOCKS 194.150.232.194:1056",
        "SOCKS 45.74.31.40:4517",
        "SOCKS 45.74.31.42:5430",
        "SOCKS 91.243.98.96:2080",
        "SOCKS 213.139.210.13:1088",
        "SOCKS 101.73.55.242:1083",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}