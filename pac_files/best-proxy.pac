function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.120.241:5556",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 125.128.12.164:3128",
        "SOCKS 139.59.114.80:60005",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 165.154.162.230:1080",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 125.128.12.104:3128",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 103.28.121.58:80",
        "SOCKS 119.81.189.194:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}