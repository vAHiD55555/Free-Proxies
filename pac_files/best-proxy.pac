function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.200.66.166:9051",
        "SOCKS 67.43.228.250:10115",
        "SOCKS 170.64.233.94:8080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 20.78.213.56:80",
        "SOCKS 13.229.47.109:80",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 152.53.171.242:58227",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 89.39.83.204:443",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 3.11.74.154:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}