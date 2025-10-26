function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.224.234.71:7300",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 152.53.36.101:55804",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 172.99.189.39:15604",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 152.53.36.101:20141",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 190.130.6.11:8080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 120.77.203.0:443",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 117.74.65.207:80",
        "SOCKS 37.59.112.197:80",
        "SOCKS 5.133.219.4:63434",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}