function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.115.21.11:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 138.124.61.15:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 157.180.121.252:19191",
        "SOCKS 157.180.121.252:15081",
        "SOCKS 157.180.121.252:42377",
        "SOCKS 8.222.177.13:1011",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 157.180.121.252:11693",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 74.119.194.225:2094",
        "SOCKS 18.170.224.221:8080",
        "SOCKS 113.45.52.130:8899",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 114.96.218.231:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}