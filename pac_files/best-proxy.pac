function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.222.241.8:42378",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 149.28.11.32:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 206.123.156.223:6449",
        "SOCKS 172.86.126.35:443",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 206.123.156.220:6114",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 206.123.156.191:9173",
        "SOCKS 46.183.25.8:443",
        "SOCKS 31.129.147.102:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 206.123.156.205:4415",
        "SOCKS 5.101.0.233:3128",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 123.54.197.19:22312",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}