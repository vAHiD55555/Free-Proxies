function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.33.141:57114",
        "SOCKS 67.43.236.22:7601",
        "SOCKS 165.22.240.121:3128",
        "SOCKS 207.246.234.115:4669",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 212.110.188.204:34411",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 80.97.47.95:3128",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 27.79.220.78:16000",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 27.71.129.176:16000",
        "SOCKS 106.52.2.26:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}