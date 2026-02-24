function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.236.203.208:3128",
        "SOCKS 14.56.118.194:3128",
        "SOCKS 123.54.197.50:23568",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 123.54.197.50:21034",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 43.132.106.29:21080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 47.83.199.137:58367",
        "SOCKS 45.140.147.82:1081",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 14.56.118.224:3128",
        "SOCKS 123.54.197.50:21889",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}