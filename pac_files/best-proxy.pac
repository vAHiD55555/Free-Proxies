function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.133.219.4:63434",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 104.236.114.255:25466",
        "SOCKS 123.205.227.82:443",
        "SOCKS 8.210.148.229:1011",
        "SOCKS 152.53.171.242:44109",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 8.243.68.10:8080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 152.53.171.242:36993",
        "SOCKS 1.180.49.222:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}