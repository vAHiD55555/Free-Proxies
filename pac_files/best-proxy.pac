function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.65.69.186:9200",
        "SOCKS 212.110.188.220:34409",
        "SOCKS 116.105.111.254:1004",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 27.79.166.135:16000",
        "SOCKS 42.118.74.104:16000",
        "SOCKS 171.237.101.70:1001",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 115.74.9.69:10004",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 154.72.204.78:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}