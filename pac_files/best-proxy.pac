function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.245.231.73:8192",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 103.191.218.253:8199",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 8.217.231.95:3356",
        "SOCKS 45.32.94.217:8888",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 8.219.234.213:1011",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 103.174.178.131:1020",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}