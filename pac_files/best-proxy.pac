function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:13709",
        "SOCKS 45.74.31.30:6138",
        "SOCKS 45.74.31.47:13873",
        "SOCKS 68.183.116.10:1080",
        "SOCKS 45.74.31.30:5399",
        "SOCKS 45.74.31.30:7003",
        "SOCKS 45.74.31.30:4503",
        "SOCKS 45.74.31.41:10744",
        "SOCKS 49.13.87.123:1131",
        "SOCKS 45.74.31.30:4374",
        "SOCKS 85.121.50.25:1080",
        "SOCKS 45.74.31.30:7926",
        "SOCKS 45.74.31.50:9540",
        "SOCKS 174.138.162.36:36034",
        "SOCKS 109.69.16.137:1080",
        "SOCKS 45.74.31.42:5060",
        "SOCKS 45.74.31.30:6851",
        "SOCKS 45.74.31.30:35646",
        "SOCKS 45.74.31.41:29916",
        "SOCKS 45.74.31.30:7046",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}