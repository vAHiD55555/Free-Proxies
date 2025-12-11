function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 170.233.30.33:4153",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 223.27.82.91:1080",
        "SOCKS 141.94.195.25:25043",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 68.183.65.150:8888",
        "SOCKS 128.140.76.145:23997",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 98.90.249.67:8080",
        "SOCKS 43.217.158.81:41804",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 62.133.63.236:1111",
        "SOCKS 52.202.30.36:80",
        "SOCKS 198.145.118.250:8080",
        "SOCKS 128.140.76.145:29696",
        "SOCKS 47.236.181.191:1080",
        "SOCKS 59.153.18.174:1120",
        "SOCKS 106.52.2.26:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}