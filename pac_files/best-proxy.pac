function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 141.94.104.205:48452",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 89.58.45.94:42231",
        "SOCKS 151.241.227.80:1080",
        "SOCKS 89.58.45.94:19065",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 8.219.172.7:1011",
        "SOCKS 89.58.45.94:12721",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 103.172.71.141:3127",
        "SOCKS 183.232.157.102:1011",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 47.237.3.83:1011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}