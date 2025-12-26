function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.72:5719",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 103.141.66.78:1080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 195.181.40.34:8080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 200.188.112.140:999",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 62.60.131.188:17795",
        "SOCKS 45.144.234.129:54972",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 139.59.225.188:12827",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}