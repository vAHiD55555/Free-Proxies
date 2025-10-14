function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.236.187.104:40355",
        "SOCKS 93.182.26.66:1080",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 31.129.147.102:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 8.218.99.137:1011",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 85.192.63.38:8118",
        "SOCKS 43.249.174.163:8118",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 152.53.36.101:10804",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}