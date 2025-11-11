function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.221.193.221:22438",
        "SOCKS 152.53.36.101:44633",
        "SOCKS 152.53.36.101:35499",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 176.124.220.172:3128",
        "SOCKS 152.53.171.242:55453",
        "SOCKS 152.53.36.101:21337",
        "SOCKS 117.74.65.207:80",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 152.53.36.101:36423",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 47.245.81.38:1011",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 160.25.8.162:11011",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 159.65.69.186:9200",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}