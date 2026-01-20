function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.7.252.165:3256",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 67.43.236.20:33075",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 37.120.162.180:39457",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 43.217.141.124:36907",
        "SOCKS 37.120.162.180:31557",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 211.175.140.8:8000",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 154.16.41.18:5555",
        "SOCKS 77.105.140.250:1080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 213.35.110.67:10872",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}