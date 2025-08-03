function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 147.75.34.74:10019",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 42.114.11.222:16000",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 107.172.96.11:24283",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 49.0.33.133:27039",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 118.99.95.104:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}