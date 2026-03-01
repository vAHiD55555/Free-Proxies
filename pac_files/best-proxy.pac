function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 61.72.221.124:3128",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 121.128.121.224:3128",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 104.238.30.91:63900",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 61.72.221.134:3128",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 181.214.39.72:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}