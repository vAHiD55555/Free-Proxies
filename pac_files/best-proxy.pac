function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 169.155.48.155:3128",
        "SOCKS 202.40.178.234:1080",
        "SOCKS 193.43.149.72:8080",
        "SOCKS 37.59.110.73:80",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 194.145.200.184:3128",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 93.177.66.204:19000",
        "SOCKS 185.238.72.222:53128",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 94.102.193.91:8080",
        "SOCKS 67.43.236.21:32215",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}