function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.56.89.191:1081",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 179.96.28.58:80",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 157.175.197.28:8819",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 45.77.156.171:9091",
        "SOCKS 152.53.36.101:20099",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 152.53.36.101:51771",
        "SOCKS 47.237.3.83:1011",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 157.180.121.252:16455",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}