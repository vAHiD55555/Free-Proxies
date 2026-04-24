function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.19.55.4:15262",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 58.19.55.7:15316",
        "SOCKS 206.123.156.231:4639",
        "SOCKS 58.19.55.4:15117",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 58.19.55.7:15102",
        "SOCKS 58.19.55.7:15227",
        "SOCKS 58.19.55.7:15029",
        "SOCKS 58.19.55.88:15074",
        "SOCKS 58.19.55.4:15350",
        "SOCKS 58.19.55.7:15037",
        "SOCKS 206.123.156.194:5199",
        "SOCKS 43.136.41.48:1080",
        "SOCKS 47.79.79.35:10808",
        "SOCKS 58.19.55.4:15352",
        "SOCKS 206.123.156.231:10830",
        "SOCKS 58.19.55.4:15213",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 58.19.55.88:15086",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}