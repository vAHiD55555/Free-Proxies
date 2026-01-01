function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.203:4363",
        "SOCKS 5.75.235.252:55049",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 194.87.77.22:80",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 5.75.235.252:46691",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 129.150.39.242:8118",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 20.2.144.174:9998",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}