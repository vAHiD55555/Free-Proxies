function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.68.147.8:3000",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 196.202.91.43:8080",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 212.110.188.216:34405",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 182.52.66.55:8080",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 72.10.160.94:21851",
        "SOCKS 161.132.50.187:8118",
        "SOCKS 42.118.16.195:16000",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 70.36.109.21:60009",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 67.43.228.250:7015",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}