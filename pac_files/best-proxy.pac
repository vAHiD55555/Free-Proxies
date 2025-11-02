function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.126.23.24:2846",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 8.243.68.10:8080",
        "SOCKS 27.72.100.236:4996",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 38.194.246.34:999",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 117.68.147.8:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}