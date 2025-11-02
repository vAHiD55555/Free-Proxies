function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.76:4145",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 37.53.90.82:12542",
        "SOCKS 72.10.160.92:26107",
        "SOCKS 135.181.203.208:80",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 137.59.51.113:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}