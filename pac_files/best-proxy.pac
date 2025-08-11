function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.104.152:49981",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 135.181.203.208:80",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 45.86.44.243:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 45.166.93.113:999",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 34.101.71.166:3128",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 47.115.42.157:8044",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}