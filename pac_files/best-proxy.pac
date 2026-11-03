function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.47:7011",
        "SOCKS 45.74.31.41:6197",
        "SOCKS 174.138.165.213:32806",
        "SOCKS 45.74.31.41:11453",
        "SOCKS 62.169.152.72:1080",
        "SOCKS 188.235.21.247:2080",
        "SOCKS 45.74.31.47:11533",
        "SOCKS 45.74.31.40:13391",
        "SOCKS 217.171.85.178:1080",
        "SOCKS 45.74.31.41:10096",
        "SOCKS 45.74.31.42:5320",
        "SOCKS 192.210.197.131:1080",
        "SOCKS 82.146.38.18:1080",
        "SOCKS 69.174.54.62:10000",
        "SOCKS 45.74.31.41:16218",
        "SOCKS 96.126.176.221:9053",
        "SOCKS 45.74.31.41:7473",
        "SOCKS 45.74.31.47:8028",
        "SOCKS 103.20.63.18:443",
        "SOCKS 45.74.31.41:8491",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}