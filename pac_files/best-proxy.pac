function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 90.68.150.113:4321",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 152.53.36.101:10075",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 117.74.65.207:80",
        "SOCKS 135.125.97.184:46107",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 177.19.167.242:80",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 193.227.129.215:52203",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}