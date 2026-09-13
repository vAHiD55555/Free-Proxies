function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:23500",
        "SOCKS 13.53.139.178:34039",
        "SOCKS 111.67.103.90:1080",
        "SOCKS 45.74.31.42:11422",
        "SOCKS 45.74.31.25:5246",
        "SOCKS 45.74.31.42:13679",
        "SOCKS 45.74.31.42:21993",
        "SOCKS 45.74.31.30:30368",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 45.74.31.30:4232",
        "SOCKS 45.74.31.30:7999",
        "SOCKS 45.74.31.30:5834",
        "SOCKS 45.74.31.30:37215",
        "SOCKS 45.74.31.42:20513",
        "SOCKS 45.74.31.30:10327",
        "SOCKS 140.238.28.230:10808",
        "SOCKS 118.179.202.230:9090",
        "SOCKS 120.133.82.62:44174",
        "SOCKS 45.74.31.42:4112",
        "SOCKS 45.74.31.30:4692",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}