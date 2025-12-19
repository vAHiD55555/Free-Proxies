function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.32.34.4:8118",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 128.140.76.145:17923",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 54.37.72.89:80",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 35.173.76.39:8080",
        "SOCKS 216.229.112.25:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}