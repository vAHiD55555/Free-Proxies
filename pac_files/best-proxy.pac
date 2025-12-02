function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:20183",
        "SOCKS 103.73.161.148:1080",
        "SOCKS 152.53.36.101:27698",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 54.193.94.249:8445",
        "SOCKS 152.53.36.101:50001",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 152.53.36.101:38307",
        "SOCKS 152.53.36.101:20407",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 138.124.49.149:10808",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 61.49.87.3:80",
        "SOCKS 78.140.46.48:1080",
        "SOCKS 135.181.203.208:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}