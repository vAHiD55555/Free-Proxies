function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.255.38.180:1080",
        "SOCKS 157.245.196.151:9090",
        "SOCKS 85.198.91.145:1081",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 5.189.160.163:9100",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 59.152.97.233:1080",
        "SOCKS 102.69.146.59:7080",
        "SOCKS 188.242.163.28:21",
        "SOCKS 130.17.2.209:3128",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 192.144.57.124:9050",
        "SOCKS 8.213.128.6:9090",
        "SOCKS 45.86.229.39:11000",
        "SOCKS 95.85.242.7:9050",
        "SOCKS 82.25.60.248:1080",
        "SOCKS 178.156.206.253:8118",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 95.105.28.76:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}