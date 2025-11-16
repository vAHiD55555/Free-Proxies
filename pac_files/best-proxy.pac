function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:14455",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 104.206.98.154:3128",
        "SOCKS 89.58.45.94:42479",
        "SOCKS 14.99.215.106:80",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 89.58.45.94:39877",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 121.132.61.211:3128",
        "SOCKS 89.58.45.94:56981",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 181.224.175.240:999",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 89.58.45.94:12283",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 165.227.104.122:48500",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}