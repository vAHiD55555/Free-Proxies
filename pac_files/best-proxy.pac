function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.72:5719",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 195.35.113.29:1080",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 185.191.236.162:3128",
        "SOCKS 61.49.87.3:80",
        "SOCKS 94.73.251.19:1080",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 62.60.131.185:6112",
        "SOCKS 35.180.188.216:80",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 91.142.79.166:8080",
        "SOCKS 38.159.62.7:999",
        "SOCKS 188.166.30.17:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}