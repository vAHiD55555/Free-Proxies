function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.123.143.247:3128",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 171.238.102.99:1068",
        "SOCKS 115.127.180.146:6969",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 103.16.62.138:10888",
        "SOCKS 162.212.153.22:8888",
        "SOCKS 18.141.177.23:80",
        "SOCKS 171.238.88.111:1069",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.61.38.140:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}