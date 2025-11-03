function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.235.155.77:47287",
        "SOCKS 72.10.160.93:26517",
        "SOCKS 45.144.234.129:53681",
        "SOCKS 157.180.121.252:38897",
        "SOCKS 202.5.48.153:11311",
        "SOCKS 152.53.36.101:53447",
        "SOCKS 97.79.251.186:80",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 67.43.228.254:11053",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 72.10.160.174:2841",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 44.251.173.250:368",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 103.174.178.131:1020",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}