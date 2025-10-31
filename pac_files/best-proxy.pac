function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.74.197.163:36918",
        "SOCKS 27.74.247.173:8080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 89.46.249.170:12345",
        "SOCKS 88.222.244.151:3128",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 8.219.114.109:1100",
        "SOCKS 147.45.51.168:1080",
        "SOCKS 47.237.132.36:33333",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 110.74.195.34:25",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}