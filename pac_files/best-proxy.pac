function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.144.54.40:1080",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 46.146.216.44:1080",
        "SOCKS 119.148.62.42:22122",
        "SOCKS 47.238.210.231:1011",
        "SOCKS 109.172.55.210:1082",
        "SOCKS 147.45.60.124:1082",
        "SOCKS 95.31.115.101:9150",
        "SOCKS 177.5.74.74:1080",
        "SOCKS 216.106.179.216:49497",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 177.52.25.34:1080",
        "SOCKS 79.134.4.192:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 103.243.82.38:8008",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 130.17.12.137:3128",
        "SOCKS 151.243.153.157:8118",
        "SOCKS 195.19.52.147:1080",
        "SOCKS 202.62.50.222:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}