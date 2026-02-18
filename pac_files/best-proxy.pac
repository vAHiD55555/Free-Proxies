function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 200.174.198.32:8888",
        "SOCKS 16.79.112.218:6666",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 178.170.43.106:8081",
        "SOCKS 217.76.245.80:999",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 123.54.197.51:23386",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 179.96.28.58:80",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 157.66.192.91:8080",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 206.206.126.140:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}