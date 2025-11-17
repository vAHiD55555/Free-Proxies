function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:13067",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 183.232.157.102:1100",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 37.221.193.221:18115",
        "SOCKS 89.58.45.94:54215",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 35.181.173.74:9443",
        "SOCKS 103.189.218.83:6969",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 119.93.160.58:8082",
        "SOCKS 38.180.100.83:2025",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 218.4.192.62:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}