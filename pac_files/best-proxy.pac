function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.62:4145",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 46.150.102.26:1080",
        "SOCKS 43.167.242.30:6006",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 125.141.139.112:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}