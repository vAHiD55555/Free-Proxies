function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.212.216.15:52638",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 114.80.36.254:3081",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 14.177.166.153:16000",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 51.158.70.181:16379",
        "SOCKS 173.209.63.67:8173",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 157.180.121.252:46206",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}