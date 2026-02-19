function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.233.203.191:4555",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 148.251.86.68:16379",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 123.54.197.24:21231",
        "SOCKS 121.230.8.80:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 103.154.230.246:8090",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 201.150.116.3:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}