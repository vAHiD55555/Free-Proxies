function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.144.234.129:53764",
        "SOCKS 14.177.226.226:10800",
        "SOCKS 103.82.23.118:5178",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 152.53.36.101:46951",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 152.53.36.101:28189",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 94.25.35.236:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 171.238.88.218:1092",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 202.58.77.76:7777",
        "SOCKS 152.53.36.101:31281",
        "SOCKS 152.53.36.101:53803",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 65.108.203.37:18080",
        "SOCKS 152.53.36.101:59425",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}