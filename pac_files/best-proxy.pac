function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 103.109.212.85:8428",
        "SOCKS 147.75.34.105:443",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 43.225.185.4:8000",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 128.140.76.145:10080",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 115.127.178.54:2026",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 18.135.126.187:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}