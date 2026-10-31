function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 217.142.236.180:1080",
        "SOCKS 77.110.97.179:1080",
        "SOCKS 47.238.128.246:90",
        "SOCKS 45.74.31.41:9012",
        "SOCKS 64.188.76.162:1080",
        "SOCKS 188.166.71.199:14905",
        "SOCKS 87.225.108.195:1080",
        "SOCKS 51.15.20.32:1088",
        "SOCKS 51.15.253.45:8080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 45.74.31.40:8224",
        "SOCKS 101.32.52.138:1080",
        "SOCKS 27.69.165.83:5325",
        "SOCKS 45.74.31.41:8448",
        "SOCKS 103.142.255.33:69",
        "SOCKS 61.155.3.26:8090",
        "SOCKS 116.101.14.169:1088",
        "SOCKS 45.74.31.47:8882",
        "SOCKS 218.95.39.114:59999",
        "SOCKS 47.238.185.110:9999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}