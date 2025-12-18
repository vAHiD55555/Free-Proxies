function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 223.27.82.91:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 157.180.52.134:60001",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 43.208.25.125:14",
        "SOCKS 159.65.166.126:8118",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 34.124.190.108:8080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 205.185.126.51:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}