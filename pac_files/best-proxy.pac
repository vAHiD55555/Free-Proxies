function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.104.152:49981",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 185.93.89.146:11180",
        "SOCKS 72.10.160.92:12137",
        "SOCKS 222.59.173.105:45162",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 81.90.149.188:3128",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 152.53.36.101:55925",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 45.138.69.27:562",
        "SOCKS 185.93.89.146:9621",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 185.93.89.182:13479",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 185.93.89.169:8843",
        "SOCKS 176.117.105.86:8080",
        "SOCKS 5.133.219.4:63434",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}