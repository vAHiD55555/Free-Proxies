function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.61.38.140:1080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 47.83.31.20:1024",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 34.124.190.108:8090",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 47.236.24.227:1011",
        "SOCKS 103.245.205.30:1080",
        "SOCKS 222.129.33.141:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}