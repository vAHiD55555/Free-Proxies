function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.220.205.172:8118",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 103.78.1.117:39114",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 8.152.192.95:9981",
        "SOCKS 67.43.228.254:6535",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 47.252.11.233:443",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 8.210.117.141:8888",
        "SOCKS 27.79.204.174:16000",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 183.80.22.185:16000",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 27.71.130.147:16000",
        "SOCKS 159.65.69.186:9200",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}