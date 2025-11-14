function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.180.121.252:56981",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 45.14.224.247:80",
        "SOCKS 37.221.193.221:11711",
        "SOCKS 135.181.203.208:80",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 72.10.160.92:30375",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 83.221.209.221:1080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 89.58.45.94:36891",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 89.58.45.94:14949",
        "SOCKS 51.222.241.8:42378",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}