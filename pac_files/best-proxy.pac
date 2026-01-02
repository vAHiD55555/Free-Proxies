function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.91.242.198:6688",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 43.133.12.238:6006",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 43.133.28.232:6006",
        "SOCKS 43.133.1.74:6006",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 43.167.206.107:6006",
        "SOCKS 43.133.21.94:6006",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 43.133.28.81:6006",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 107.175.232.156:7080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}