function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.95.39.30:59999",
        "SOCKS 103.161.104.99:1080",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 206.123.156.200:11128",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 206.123.156.219:8873",
        "SOCKS 8.213.128.6:80",
        "SOCKS 206.123.156.215:10506",
        "SOCKS 5.45.118.209:1080",
        "SOCKS 144.217.12.20:10808",
        "SOCKS 206.123.156.234:4580",
        "SOCKS 220.158.234.84:1080",
        "SOCKS 64.225.42.129:3006",
        "SOCKS 77.245.76.107:1080",
        "SOCKS 206.123.156.232:4081",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 184.95.220.42:1080",
        "SOCKS 206.123.156.200:8519",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 206.123.156.224:4326",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}