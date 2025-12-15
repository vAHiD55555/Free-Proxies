function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.116.159:5556",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 15.206.25.229:80",
        "SOCKS 146.235.194.154:1080",
        "SOCKS 121.230.8.91:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 117.74.65.207:80",
        "SOCKS 34.173.73.208:14",
        "SOCKS 18.135.126.187:8080",
        "SOCKS 67.43.228.252:2357",
        "SOCKS 45.89.110.47:8888",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 52.202.30.36:80",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 20.210.39.153:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}