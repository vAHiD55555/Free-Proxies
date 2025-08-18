function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.78.118.91:8561",
        "SOCKS 185.41.152.110:3128",
        "SOCKS 159.69.57.20:8880",
        "SOCKS 27.79.208.74:16000",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 173.209.63.69:8245",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 117.74.65.207:80",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 40.71.46.210:8214",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}