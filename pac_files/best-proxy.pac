function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.222.151.218:5566",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 115.127.112.178:1080",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 115.127.176.182:2589",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 185.236.202.205:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}