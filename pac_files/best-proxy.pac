function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.19:3527",
        "SOCKS 45.146.130.23:6797",
        "SOCKS 212.110.188.211:34409",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 38.194.246.34:999",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 171.238.64.26:1006",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 27.71.131.186:16000",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 171.228.181.175:2001",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 159.89.98.131:3128",
        "SOCKS 65.108.251.40:11107",
        "SOCKS 185.155.99.114:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}