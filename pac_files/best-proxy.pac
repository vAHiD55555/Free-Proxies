function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.21.153.16:3128",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 157.20.244.78:8080",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 68.71.241.33:4145",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 100.27.183.62:8080",
        "SOCKS 136.239.209.125:8080",
        "SOCKS 204.44.87.247:8888",
        "SOCKS 185.118.51.230:3128",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 82.115.24.134:9090",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 173.236.187.104:40355",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}