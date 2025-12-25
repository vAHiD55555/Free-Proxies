function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.224.116.65:1120",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 69.49.234.59:55804",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 203.189.137.127:1080",
        "SOCKS 72.10.160.94:7663",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 160.25.52.249:3128",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 203.189.158.239:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 147.45.60.60:80",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 141.94.195.25:22558",
        "SOCKS 194.87.77.22:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}