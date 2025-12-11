function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:58345",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 103.160.12.147:8199",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 152.53.171.242:51911",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 52.87.167.25:80",
        "SOCKS 43.130.52.194:8118",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 116.129.250.48:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 20.223.127.248:3128",
        "SOCKS 179.96.28.58:80",
        "SOCKS 128.140.76.145:20686",
        "SOCKS 152.228.212.223:29272",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}