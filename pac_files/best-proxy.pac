function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 213.35.126.34:10808",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 31.129.147.102:1080",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 43.247.13.234:5678",
        "SOCKS 45.122.123.29:8199",
        "SOCKS 45.144.234.129:53764",
        "SOCKS 128.140.76.145:24581",
        "SOCKS 68.183.65.150:8888",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 61.9.34.118:58765",
        "SOCKS 128.140.76.145:30565",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 194.28.162.12:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}