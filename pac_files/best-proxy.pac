function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.182.233.70:7302",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 188.19.15.242:8080",
        "SOCKS 104.248.198.6:8080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 150.230.249.50:1080",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 202.62.50.222:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}