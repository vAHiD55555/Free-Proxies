function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 209.97.150.167:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 3.107.252.199:8099",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 165.232.170.16:60002",
        "SOCKS 41.33.252.209:80",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 165.227.174.249:33080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}