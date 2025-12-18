function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.4.192.62:7302",
        "SOCKS 82.26.150.55:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 117.74.65.207:443",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 115.127.179.86:2026",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 169.239.181.213:8888",
        "SOCKS 61.178.99.43:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}