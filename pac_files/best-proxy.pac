function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.197.67:1080",
        "SOCKS 13.229.107.106:80",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 202.152.44.18:8081",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 187.61.98.7:8080",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 45.81.131.223:8888",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 181.214.39.73:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}