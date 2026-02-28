function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.128.121.184:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 202.65.127.194:1080",
        "SOCKS 223.26.63.121:8888",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 45.138.69.35:558",
        "SOCKS 95.165.82.189:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 159.65.230.91:20547",
        "SOCKS 213.35.110.67:10868",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 115.127.95.82:8080",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 120.77.203.0:443",
        "SOCKS 61.130.151.230:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}