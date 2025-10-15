function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 200.85.167.254:8080",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 168.138.15.93:1080",
        "SOCKS 114.80.40.128:3081",
        "SOCKS 41.173.7.82:8080",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 72.10.160.92:12137",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 157.20.252.97:8097",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 222.129.32.173:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}