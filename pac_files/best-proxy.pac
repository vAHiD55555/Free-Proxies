function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.165.205.212:1452",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 152.53.36.101:22675",
        "SOCKS 44.251.173.250:368",
        "SOCKS 114.80.32.8:3081",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 116.101.73.249:1035",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 116.101.75.17:1035",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 152.53.36.101:13295",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 222.129.32.188:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}