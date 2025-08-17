function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 135.181.203.208:80",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 212.110.188.219:34408",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 45.166.93.113:999",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 14.239.189.220:8080",
        "SOCKS 202.137.14.57:8085",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 89.19.175.122:8008",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 138.199.25.13:3905",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 173.209.63.69:8245",
        "SOCKS 212.110.188.194:34410",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}