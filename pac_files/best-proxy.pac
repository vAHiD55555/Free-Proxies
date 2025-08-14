function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.79.153.152:16000",
        "SOCKS 222.59.173.105:44153",
        "SOCKS 191.7.215.165:1452",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 91.214.62.121:8053",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 47.91.120.190:9098",
        "SOCKS 27.79.166.139:16000",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 192.177.139.119:8000",
        "SOCKS 117.74.65.207:443",
        "SOCKS 1.54.69.219:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}