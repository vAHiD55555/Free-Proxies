function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.56.89.191:1081",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 198.24.188.138:57535",
        "SOCKS 103.244.107.150:8080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 82.26.94.116:48131",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 43.167.209.36:6006",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 43.167.186.76:6006",
        "SOCKS 202.62.59.216:1080",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 222.129.35.9:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}