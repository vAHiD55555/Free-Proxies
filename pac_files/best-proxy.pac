function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 154.236.177.102:1977",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 38.172.160.16:999",
        "SOCKS 190.130.6.11:8080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 91.213.99.134:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}