function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.77.198.168:9050",
        "SOCKS 47.243.197.73:9050",
        "SOCKS 147.45.169.78:49153",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 104.207.139.62:1080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 47.85.37.60:1080",
        "SOCKS 34.69.61.247:80",
        "SOCKS 139.59.44.192:9050",
        "SOCKS 103.165.128.75:1080",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 152.32.217.35:10808",
        "SOCKS 8.213.195.191:9080",
        "SOCKS 204.152.192.13:1080",
        "SOCKS 45.77.37.39:2055",
        "SOCKS 8.213.222.247:18080",
        "SOCKS 34.229.113.62:1080",
        "SOCKS 47.81.56.193:8888",
        "SOCKS 216.106.179.216:49393",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}