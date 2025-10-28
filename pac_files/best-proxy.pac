function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.108.111.59:8080",
        "SOCKS 103.9.190.130:8080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 159.89.175.22:8888",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 200.29.232.230:8080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 188.120.245.247:12432",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}