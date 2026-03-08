function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.213.156.191:85",
        "SOCKS 120.77.203.0:443",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 147.45.141.187:50308",
        "SOCKS 167.172.69.123:8080",
        "SOCKS 45.84.1.219:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 206.123.156.179:6005",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 109.120.135.192:1080",
        "SOCKS 71.168.71.12:8888",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 206.123.156.214:5700",
        "SOCKS 202.58.77.19:3127",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 125.141.133.49:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}