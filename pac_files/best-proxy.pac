function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.121.120.242:1080",
        "SOCKS 47.76.171.214:3128",
        "SOCKS 195.19.50.130:1080",
        "SOCKS 88.247.177.8:3310",
        "SOCKS 64.225.42.129:3007",
        "SOCKS 103.82.20.76:8080",
        "SOCKS 103.151.74.5:2025",
        "SOCKS 152.70.107.226:1080",
        "SOCKS 103.6.235.13:5555",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 119.148.7.10:22122",
        "SOCKS 13.140.164.179:3592",
        "SOCKS 109.123.251.109:1080",
        "SOCKS 8.221.141.88:5006",
        "SOCKS 104.154.186.48:80",
        "SOCKS 13.53.139.178:34039",
        "SOCKS 138.199.25.13:3907",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 119.148.31.170:22122",
        "SOCKS 193.233.139.106:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}