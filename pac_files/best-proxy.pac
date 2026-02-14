function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.163.160.97:10808",
        "SOCKS 152.53.171.242:13013",
        "SOCKS 123.54.197.50:22237",
        "SOCKS 123.54.197.21:21127",
        "SOCKS 123.54.197.24:20852",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 72.10.160.92:13609",
        "SOCKS 118.107.3.221:5555",
        "SOCKS 46.20.106.102:1080",
        "SOCKS 123.54.197.25:23918",
        "SOCKS 123.54.197.24:22084",
        "SOCKS 8.212.178.171:80",
        "SOCKS 13.57.178.251:3128",
        "SOCKS 146.56.185.39:10900",
        "SOCKS 123.54.197.16:21916",
        "SOCKS 123.54.197.20:20300",
        "SOCKS 104.251.81.221:14270",
        "SOCKS 157.230.106.35:8080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 103.28.121.58:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}