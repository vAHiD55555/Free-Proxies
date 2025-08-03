function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.254:6535",
        "SOCKS 68.183.179.119:8888",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 170.130.202.134:3128",
        "SOCKS 157.15.66.105:8080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 185.155.99.114:8118",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 117.74.65.207:443",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 51.158.125.47:16379",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 121.42.9.57:7201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}