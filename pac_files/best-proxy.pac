function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.109.57.42:3629",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 191.7.215.165:1452",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 65.108.251.40:57575",
        "SOCKS 135.181.203.208:80",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 14.172.146.226:20399",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 140.237.14.92:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}