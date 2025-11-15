function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.25.208.163:1011",
        "SOCKS 91.206.14.55:1080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 89.58.45.94:36121",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 212.2.234.165:8080",
        "SOCKS 123.128.12.93:9055",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 67.43.236.19:21023",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 89.58.45.94:39877",
        "SOCKS 139.59.225.188:12827",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}