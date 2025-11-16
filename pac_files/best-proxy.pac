function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.169.46.116:1090",
        "SOCKS 89.58.45.94:14949",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 177.39.72.73:8080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 172.94.36.219:80",
        "SOCKS 157.230.45.111:1080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 47.239.10.198:1111",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 103.16.62.138:10888",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 37.221.193.221:19675",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 35.86.27.94:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}