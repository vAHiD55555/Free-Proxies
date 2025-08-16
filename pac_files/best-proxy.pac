function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.94:29225",
        "SOCKS 51.79.99.237:4502",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 94.73.239.124:55443",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 27.79.139.183:16000",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 27.79.223.199:16000",
        "SOCKS 34.88.57.53:3128",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 27.71.139.254:16000",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 222.129.32.173:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}