function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.74.197.163:36918",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 120.132.97.88:7897",
        "SOCKS 103.245.110.198:1452",
        "SOCKS 45.115.112.142:11011",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 193.233.254.7:1080",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 136.49.37.227:8888",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 47.242.53.7:1111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}