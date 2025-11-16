function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:21353",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 89.58.45.94:54003",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 90.174.128.42:3128",
        "SOCKS 155.94.163.198:1080",
        "SOCKS 103.148.112.69:8199",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 72.10.160.94:23005",
        "SOCKS 117.74.65.207:80",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 183.232.157.102:1011",
        "SOCKS 89.58.45.94:47471",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 112.86.116.24:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}