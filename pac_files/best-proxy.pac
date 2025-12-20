function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.6.9.176:8072",
        "SOCKS 150.107.140.238:3128",
        "SOCKS 203.189.137.122:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 103.234.31.254:8080",
        "SOCKS 160.25.196.44:8090",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 128.140.76.145:22413",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 49.156.151.246:83",
        "SOCKS 103.239.41.131:8080",
        "SOCKS 61.178.99.43:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}