function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.240.207:16379",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 158.160.215.167:8123",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 52.73.65.198:80",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 54.89.108.25:80",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 123.54.197.20:22115",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 104.248.59.38:80",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 123.54.197.21:20473",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 120.77.203.0:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}