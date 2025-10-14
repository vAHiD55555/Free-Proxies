function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.210.4.18:7779",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 152.53.36.101:40638",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 171.232.181.2:4002",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 91.151.88.220:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}