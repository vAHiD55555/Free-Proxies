function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 111.68.26.237:8080",
        "SOCKS 183.249.5.214:22222",
        "SOCKS 45.12.151.226:2828",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 103.174.175.98:8085",
        "SOCKS 49.48.65.152:8080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 123.54.197.49:22257",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 43.132.106.29:21080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 3.24.178.81:80",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 51.222.241.8:42378",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}