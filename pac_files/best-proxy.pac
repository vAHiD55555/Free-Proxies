function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.158.27:25100",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 13.115.193.75:9181",
        "SOCKS 179.96.28.58:80",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 148.251.86.68:16379",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 35.180.188.216:80",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 176.108.146.179:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 47.239.61.82:9001",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 38.159.62.7:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}