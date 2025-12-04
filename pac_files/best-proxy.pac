function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.66.165.154:7302",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 185.32.5.72:8090",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 82.115.24.134:9090",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 164.163.42.2:10000",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 123.57.0.163:8888",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 165.227.104.122:48500",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}