function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.74.65.207:80",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 47.236.17.156:1011",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 41.254.48.192:1978",
        "SOCKS 47.84.70.29:8888",
        "SOCKS 135.181.203.208:80",
        "SOCKS 157.180.121.252:10008",
        "SOCKS 152.53.36.101:15857",
        "SOCKS 185.244.77.62:1080",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 152.53.36.101:33333",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 89.58.45.94:12979",
        "SOCKS 160.25.8.162:11011",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 37.221.193.221:29595",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 114.99.200.41:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}