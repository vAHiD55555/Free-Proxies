function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.154.43.198:39522",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 212.175.88.208:8080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 45.144.234.129:53681",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 114.80.40.128:3081",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 41.203.76.166:8080",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 176.88.65.189:8080",
        "SOCKS 200.24.146.97:8080",
        "SOCKS 15.160.186.74:521",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}