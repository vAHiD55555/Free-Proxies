function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:8904",
        "SOCKS 45.74.31.30:8686",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 45.74.31.30:6871",
        "SOCKS 45.74.31.30:8412",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 45.74.31.30:10534",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 45.74.31.30:5313",
        "SOCKS 45.74.31.47:32230",
        "SOCKS 185.49.110.155:1080",
        "SOCKS 45.74.31.42:17271",
        "SOCKS 45.74.31.30:5840",
        "SOCKS 45.74.31.30:8195",
        "SOCKS 45.74.31.42:12909",
        "SOCKS 185.197.74.126:2080",
        "SOCKS 45.74.31.30:5636",
        "SOCKS 45.74.31.30:8107",
        "SOCKS 45.95.202.92:10808",
        "SOCKS 45.74.31.30:34387",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}