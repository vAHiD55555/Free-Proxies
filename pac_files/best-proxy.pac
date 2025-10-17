function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.159.129:8081",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 103.154.230.94:8090",
        "SOCKS 185.93.89.145:9315",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 8.219.172.7:1011",
        "SOCKS 185.93.89.158:8002",
        "SOCKS 89.58.45.94:46224",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 185.93.89.182:4592",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 185.93.89.144:11751",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 67.205.153.110:51528",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}