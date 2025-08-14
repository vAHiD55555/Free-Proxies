function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.40:4145",
        "SOCKS 192.177.33.17:9000",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 27.79.141.31:16000",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 116.105.31.185:9100",
        "SOCKS 14.162.194.58:10001",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 82.147.118.110:1080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 103.175.231.96:10001",
        "SOCKS 162.223.89.83:1080",
        "SOCKS 222.129.35.9:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}