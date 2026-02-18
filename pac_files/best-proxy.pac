function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 23.251.62.210:10080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 123.54.197.24:23205",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 85.208.108.43:2094",
        "SOCKS 123.54.197.19:23713",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 123.54.197.19:23068",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 101.47.73.135:3128",
        "SOCKS 217.144.187.3:1080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 178.49.22.23:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}