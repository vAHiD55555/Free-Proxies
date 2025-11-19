function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.104.240.74:9053",
        "SOCKS 89.58.45.94:10083",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 89.58.45.94:22727",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 102.36.127.231:1080",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 89.58.45.94:31034",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 89.58.45.94:11011",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 89.58.45.94:19065",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 109.245.231.73:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}