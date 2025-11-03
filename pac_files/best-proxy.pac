function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 137.184.228.194:40886",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 43.229.79.217:3128",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 5.102.109.41:999",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 170.80.50.66:8080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 13.212.76.113:9298",
        "SOCKS 157.175.152.104:52873",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}