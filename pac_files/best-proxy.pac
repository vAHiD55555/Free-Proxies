function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 35.180.127.14:1001",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 160.20.55.235:8080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 72.10.160.90:32931",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 13.229.47.109:80",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 200.174.198.32:8888",
        "SOCKS 123.54.197.20:20478",
        "SOCKS 123.54.197.21:21358",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 123.54.197.16:20256",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 144.91.78.34:20269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}