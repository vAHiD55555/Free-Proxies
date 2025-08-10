function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.113.155.120:41154",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 190.217.19.185:999",
        "SOCKS 212.110.188.214:34403",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 41.33.252.209:80",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 8.209.255.114:20172",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 152.53.194.46:8065",
        "SOCKS 209.121.164.51:31147",
        "SOCKS 45.89.28.226:12915",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}