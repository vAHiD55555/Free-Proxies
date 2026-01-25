function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.168:23500",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 13.229.47.109:80",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 200.59.191.235:999",
        "SOCKS 163.5.128.178:14270",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 62.60.131.185:5586",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 62.60.131.181:18968",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 157.230.1.108:14070",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}