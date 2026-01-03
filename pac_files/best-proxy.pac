function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 93.184.4.37:1080",
        "SOCKS 47.84.131.156:8100",
        "SOCKS 43.167.223.5:6006",
        "SOCKS 43.167.226.111:6006",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 203.189.151.19:1080",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 35.182.97.107:80",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 103.239.200.226:11",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 183.164.226.253:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}