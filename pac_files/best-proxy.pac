function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.99.27.22:5082",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 36.255.98.176:4704",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 38.172.160.16:999",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 36.255.98.150:4613",
        "SOCKS 62.60.131.253:7653",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 36.255.98.163:4245",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 62.60.131.180:5498",
        "SOCKS 62.60.131.182:4298",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 62.60.131.180:19547",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 36.255.98.154:4006",
        "SOCKS 45.166.93.113:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}