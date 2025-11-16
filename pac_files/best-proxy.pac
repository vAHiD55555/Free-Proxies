function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 102.36.133.62:8080",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 91.238.104.172:2024",
        "SOCKS 43.133.37.149:1080",
        "SOCKS 103.183.8.118:8090",
        "SOCKS 72.195.101.99:4145",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 36.147.78.166:80",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 183.232.157.102:1011",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 45.65.137.218:999",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 40.192.27.104:16825",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 89.58.45.94:19085",
        "SOCKS 89.58.45.94:39155",
        "SOCKS 8.221.138.111:31433",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}