function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.40:9330",
        "SOCKS 45.74.31.40:6348",
        "SOCKS 45.74.31.41:7339",
        "SOCKS 193.218.118.128:1080",
        "SOCKS 140.238.14.161:8082",
        "SOCKS 31.44.6.176:1083",
        "SOCKS 46.8.221.230:1080",
        "SOCKS 47.82.84.127:1011",
        "SOCKS 194.87.105.200:1080",
        "SOCKS 221.225.48.68:8989",
        "SOCKS 195.19.51.79:1080",
        "SOCKS 85.234.116.5:1080",
        "SOCKS 45.74.31.42:7508",
        "SOCKS 151.243.93.249:1080",
        "SOCKS 176.49.138.192:10808",
        "SOCKS 158.46.30.158:10808",
        "SOCKS 27.66.24.156:1080",
        "SOCKS 103.66.62.102:1080",
        "SOCKS 120.24.22.233:1080",
        "SOCKS 45.74.31.47:4057",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}