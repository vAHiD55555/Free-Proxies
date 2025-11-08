function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.72:5719",
        "SOCKS 8.216.81.102:1100",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 193.58.120.232:8080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 8.219.234.213:1011",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 27.116.41.156:8470",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 135.181.203.208:80",
        "SOCKS 47.97.86.231:8222",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}