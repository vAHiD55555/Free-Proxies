function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.74.192.44:24822",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 31.193.193.69:1488",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 47.237.132.36:33333",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 114.80.37.90:3081",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 57.128.188.167:9298",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 16.78.104.244:9078",
        "SOCKS 45.14.224.247:80",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 135.181.203.208:80",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 20.210.76.104:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}