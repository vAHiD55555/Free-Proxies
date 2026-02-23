function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 107.219.228.250:7777",
        "SOCKS 14.56.118.34:3128",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 103.28.121.58:80",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 104.248.59.38:80",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 123.54.197.18:21872",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 123.54.197.18:20367",
        "SOCKS 44.213.190.51:80",
        "SOCKS 193.233.254.38:1080",
        "SOCKS 109.107.181.253:1080",
        "SOCKS 123.54.197.19:20873",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 61.72.110.154:3128",
        "SOCKS 115.127.83.142:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}