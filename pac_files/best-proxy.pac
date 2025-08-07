function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 192.177.139.23:8000",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 45.166.93.113:999",
        "SOCKS 103.249.201.50:60153",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 208.102.24.225:8888",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 103.132.52.32:8080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 117.161.170.163:9009",
        "SOCKS 87.107.48.53:1080",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 116.98.183.148:1010",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 208.113.222.205:57226",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}