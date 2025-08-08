function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.55.60.47:16000",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 209.121.164.50:31147",
        "SOCKS 47.251.43.115:33333",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 157.66.84.24:1983",
        "SOCKS 147.75.34.105:443",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 135.181.203.208:80",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 72.10.160.171:9915",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}