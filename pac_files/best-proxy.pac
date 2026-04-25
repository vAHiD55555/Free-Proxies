function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.19.55.7:15242",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 206.123.156.207:5080",
        "SOCKS 58.19.55.88:15030",
        "SOCKS 58.19.55.7:15289",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 46.30.41.59:9955",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 206.123.156.207:5271",
        "SOCKS 206.123.156.231:7343",
        "SOCKS 206.123.156.207:5449",
        "SOCKS 206.123.156.231:5759",
        "SOCKS 58.19.55.4:15154",
        "SOCKS 103.239.52.100:1080",
        "SOCKS 58.19.55.7:15193",
        "SOCKS 206.123.156.207:5946",
        "SOCKS 206.123.156.231:4985",
        "SOCKS 94.131.118.39:1081",
        "SOCKS 58.19.55.4:15181",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}