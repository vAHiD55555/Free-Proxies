function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.161.50.82:8118",
        "SOCKS 221.176.85.232:1080",
        "SOCKS 144.21.39.252:1080",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 193.24.222.150:33500",
        "SOCKS 45.76.104.16:1080",
        "SOCKS 188.242.163.28:21",
        "SOCKS 91.228.133.191:8888",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 47.91.121.127:9098",
        "SOCKS 154.62.226.187:9051",
        "SOCKS 125.24.156.113:7080",
        "SOCKS 43.156.201.214:2080",
        "SOCKS 119.148.62.42:22122",
        "SOCKS 147.45.60.241:1082",
        "SOCKS 216.106.179.216:49252",
        "SOCKS 103.121.120.242:1080",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 216.106.179.216:49305",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}