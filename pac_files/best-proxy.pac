function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.92:57114",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 36.255.98.180:8925",
        "SOCKS 8.212.151.166:1080",
        "SOCKS 45.126.125.211:8443",
        "SOCKS 69.163.161.209:38713",
        "SOCKS 82.26.94.116:48131",
        "SOCKS 45.88.0.116:3128",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 20.78.213.56:80",
        "SOCKS 160.19.16.86:1080",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 62.60.131.186:46064",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 62.60.131.186:5178",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 218.4.192.62:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}