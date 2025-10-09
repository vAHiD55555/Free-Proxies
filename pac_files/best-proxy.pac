function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.74.73.202:42055",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 116.203.51.18:8118",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 31.14.114.66:1081",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 179.96.28.58:80",
        "SOCKS 20.41.240.154:3128",
        "SOCKS 65.108.251.40:57575",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 42.96.16.176:1312",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}