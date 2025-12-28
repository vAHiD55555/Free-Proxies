function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.80.1:9090",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 31.132.151.158:8080",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 36.255.98.177:6103",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 200.59.191.163:999",
        "SOCKS 62.60.131.189:4295",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 212.23.69.121:1080",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 203.189.150.44:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}