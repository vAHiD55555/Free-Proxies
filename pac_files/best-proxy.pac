function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.250:1080",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 16.78.219.183:1964",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 130.94.11.152:8080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 169.57.157.148:80",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 119.81.189.194:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}