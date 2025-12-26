function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.32.34.4:8118",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 217.150.43.249:8080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 139.59.24.173:1080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 67.43.236.19:29535",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 1.180.0.162:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}