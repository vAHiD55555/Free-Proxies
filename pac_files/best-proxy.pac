function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.104.152:49981",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 186.148.178.195:999",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 103.190.120.98:30027",
        "SOCKS 173.209.63.68:8047",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 27.79.180.74:16000",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 65.108.251.40:57575",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 47.245.117.43:80",
        "SOCKS 51.79.99.237:4502",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 140.238.184.182:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}