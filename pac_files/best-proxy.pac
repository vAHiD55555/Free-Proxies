function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 161.35.31.237:1080",
        "SOCKS 3.239.166.14:80",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 78.12.249.123:8796",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 128.140.76.145:18073",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 3.11.74.154:8080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 172.94.36.219:80",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 147.75.34.93:10006",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 67.43.236.19:18841",
        "SOCKS 45.32.94.217:8888",
        "SOCKS 125.141.133.49:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}