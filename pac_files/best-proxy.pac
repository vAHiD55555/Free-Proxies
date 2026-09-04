function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.130.50.118:1080",
        "SOCKS 41.65.103.190:8080",
        "SOCKS 34.69.61.247:80",
        "SOCKS 93.87.38.20:1090",
        "SOCKS 167.172.91.26:1080",
        "SOCKS 138.124.118.235:8080",
        "SOCKS 80.78.25.87:9050",
        "SOCKS 158.58.134.65:10080",
        "SOCKS 157.245.193.193:8888",
        "SOCKS 203.189.155.68:1080",
        "SOCKS 8.220.205.172:9098",
        "SOCKS 103.210.161.8:1080",
        "SOCKS 45.74.31.30:8780",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 72.194.42.131:4145",
        "SOCKS 144.202.16.214:1088",
        "SOCKS 80.72.180.122:1080",
        "SOCKS 15.237.108.20:54588",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 110.235.247.248:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}