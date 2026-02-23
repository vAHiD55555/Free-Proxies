function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.138.62.182:43715",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 123.54.197.49:22379",
        "SOCKS 123.54.197.52:23416",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 43.132.106.29:21080",
        "SOCKS 119.81.71.27:80",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 13.36.243.194:9899",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 119.81.189.194:80",
        "SOCKS 123.54.197.52:21248",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 179.96.28.58:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}