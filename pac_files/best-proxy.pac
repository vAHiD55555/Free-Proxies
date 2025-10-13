function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.62:4145",
        "SOCKS 45.4.202.170:999",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 157.20.207.169:8080",
        "SOCKS 38.224.223.246:9991",
        "SOCKS 95.0.90.242:8080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 103.169.128.158:8080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 78.12.249.123:8026",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}