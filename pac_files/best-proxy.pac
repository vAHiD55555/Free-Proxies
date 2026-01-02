function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.62.50:1088",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 36.255.98.177:4245",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 43.133.6.137:6006",
        "SOCKS 43.133.1.140:6006",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 62.60.131.194:5117",
        "SOCKS 43.133.12.137:6006",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 134.122.21.142:33346",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}