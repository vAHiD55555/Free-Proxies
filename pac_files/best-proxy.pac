function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.174:27047",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 129.153.107.221:80",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 65.108.203.35:18080",
        "SOCKS 72.223.188.67:4145",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 43.208.25.125:14",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 113.164.135.164:8080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 37.59.110.73:80",
        "SOCKS 128.140.76.145:23822",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 45.166.93.113:999",
        "SOCKS 91.151.88.220:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}