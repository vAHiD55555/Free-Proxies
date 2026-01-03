function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.167.226.111:6006",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 43.167.212.172:6006",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 62.60.131.195:35210",
        "SOCKS 43.167.210.37:6006",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 43.167.217.22:6006",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 43.167.191.51:6006",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 68.71.252.38:4145",
        "SOCKS 43.167.232.76:6006",
        "SOCKS 82.223.165.28:18356",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 103.141.66.78:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}