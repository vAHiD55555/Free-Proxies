function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.115:57114",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 8.209.255.114:20172",
        "SOCKS 89.46.249.252:8765",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 107.152.45.72:8888",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 8.221.139.222:6666",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 89.19.175.122:8008",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 200.29.232.230:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}