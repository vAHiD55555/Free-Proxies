function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.52:22714",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 91.185.33.247:1080",
        "SOCKS 14.56.118.74:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 193.242.106.191:1080",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 119.81.189.194:80",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 104.248.59.38:80",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 121.128.121.34:3128",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 51.15.223.12:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}