function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.215.46.91:20087",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 152.53.171.242:22791",
        "SOCKS 89.58.45.94:22785",
        "SOCKS 157.180.121.252:15311",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 152.53.171.242:46673",
        "SOCKS 89.58.45.94:19065",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 47.242.44.225:1011",
        "SOCKS 89.58.45.94:42125",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 152.53.171.242:18943",
        "SOCKS 89.58.45.94:15597",
        "SOCKS 89.58.45.94:59621",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 152.53.36.101:59425",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}