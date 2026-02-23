function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.99.10.252:1080",
        "SOCKS 147.75.34.105:443",
        "SOCKS 193.242.106.191:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 38.175.204.116:50161",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 159.65.230.91:20052",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 103.28.121.58:80",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 18.141.177.23:80",
        "SOCKS 113.176.118.150:1080",
        "SOCKS 51.222.241.8:42378",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}