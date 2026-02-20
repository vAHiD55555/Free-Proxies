function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.230.1.108:14070",
        "SOCKS 144.124.227.88:3128",
        "SOCKS 194.135.17.31:1080",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 123.54.197.16:23195",
        "SOCKS 152.32.213.178:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 188.19.15.242:8080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 123.54.197.24:23909",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 89.117.130.19:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}