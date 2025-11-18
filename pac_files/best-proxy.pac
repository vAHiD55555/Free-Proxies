function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.199.25.13:3902",
        "SOCKS 89.58.45.94:28477",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 89.58.45.94:41783",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 89.58.45.94:57255",
        "SOCKS 152.53.171.242:27647",
        "SOCKS 89.58.45.94:10099",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 89.58.45.94:10319",
        "SOCKS 157.180.121.252:47574",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 43.153.64.222:14465",
        "SOCKS 152.53.171.242:38039",
        "SOCKS 89.58.45.94:37805",
        "SOCKS 103.191.218.253:8199",
        "SOCKS 47.239.10.198:1111",
        "SOCKS 89.58.45.94:24516",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 208.65.90.3:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}