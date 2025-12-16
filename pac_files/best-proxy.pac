function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.166.132.124:3000",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 47.250.159.65:9098",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 115.127.182.90:2026",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 94.131.82.71:10800",
        "SOCKS 146.56.117.33:1080",
        "SOCKS 179.96.28.58:80",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 115.127.83.142:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}