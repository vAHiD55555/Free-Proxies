function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.221.193.221:30001",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 155.94.163.202:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 67.43.228.251:12125",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 123.128.12.93:9055",
        "SOCKS 72.10.160.92:30375",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 135.181.203.208:80",
        "SOCKS 212.113.100.43:10808",
        "SOCKS 102.36.127.231:1080",
        "SOCKS 37.221.193.221:19273",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 148.135.97.2:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}