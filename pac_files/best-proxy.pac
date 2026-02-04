function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 195.133.11.246:1080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 34.1.133.104:3128",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 144.124.228.155:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 138.199.25.13:3904",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 51.158.98.211:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}