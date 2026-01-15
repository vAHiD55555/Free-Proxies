function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.123.143.247:3128",
        "SOCKS 103.239.201.50:58765",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 46.0.205.4:1080",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 144.208.127.181:3128",
        "SOCKS 148.251.86.68:16379",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 37.59.110.73:80",
        "SOCKS 89.22.237.70:80",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 36.255.98.163:16870",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 35.180.127.14:1001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}