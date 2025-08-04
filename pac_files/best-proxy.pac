function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 209.97.150.167:1080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 212.110.188.193:34409",
        "SOCKS 103.156.74.154:1111",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 8.208.94.223:3128",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 67.43.228.254:6535",
        "SOCKS 27.79.183.250:16000",
        "SOCKS 178.18.244.8:8888",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 43.159.54.102:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}