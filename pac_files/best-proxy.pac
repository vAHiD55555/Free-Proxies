function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.219.229.53:9080",
        "SOCKS 43.167.243.165:6006",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 31.59.185.74:2525",
        "SOCKS 43.167.225.246:6006",
        "SOCKS 43.167.233.124:6006",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 47.245.106.129:1011",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 62.60.131.186:4145",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 94.23.222.122:10581",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}