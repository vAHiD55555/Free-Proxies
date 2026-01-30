function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.203:4024",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 47.237.113.119:14",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 36.255.98.167:10805",
        "SOCKS 36.255.98.168:6956",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 62.60.131.203:5133",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 62.60.131.183:4554",
        "SOCKS 36.255.98.184:4371",
        "SOCKS 36.255.98.160:8021",
        "SOCKS 62.60.131.204:5394",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}