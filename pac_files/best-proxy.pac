function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.245.231.73:8192",
        "SOCKS 159.13.44.239:8080",
        "SOCKS 172.99.189.39:15604",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 185.93.89.182:8880",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 185.93.89.147:9050",
        "SOCKS 185.93.89.180:9191",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 89.58.45.94:28751",
        "SOCKS 185.93.89.146:4083",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 67.43.236.22:20051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}