function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.5.85.65:1080",
        "SOCKS 50.85.78.115:1080",
        "SOCKS 221.225.48.114:8989",
        "SOCKS 45.74.31.42:4138",
        "SOCKS 8.211.51.115:90",
        "SOCKS 83.237.247.238:1080",
        "SOCKS 45.74.31.40:5880",
        "SOCKS 5.175.217.64:1080",
        "SOCKS 45.147.50.64:1080",
        "SOCKS 45.74.31.42:4829",
        "SOCKS 120.133.82.62:44147",
        "SOCKS 112.118.58.33:5001",
        "SOCKS 60.209.70.123:30001",
        "SOCKS 8.222.134.33:1080",
        "SOCKS 5.83.158.2:1080",
        "SOCKS 145.220.227.145:8080",
        "SOCKS 37.122.149.58:1080",
        "SOCKS 94.231.152.55:1080",
        "SOCKS 93.115.20.101:1080",
        "SOCKS 168.222.43.35:8443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}