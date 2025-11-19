function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:22727",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 89.58.45.94:28541",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 152.53.171.242:45589",
        "SOCKS 89.58.45.94:36237",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 89.58.45.94:28917",
        "SOCKS 89.58.45.94:52049",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 89.58.45.94:13649",
        "SOCKS 152.53.171.242:20375",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 152.53.171.242:30423",
        "SOCKS 47.251.110.95:3128",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 43.217.134.46:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}