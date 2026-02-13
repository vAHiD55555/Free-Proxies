function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.227.225.157:3389",
        "SOCKS 149.129.226.9:194",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 152.53.171.242:20391",
        "SOCKS 8.219.229.53:8008",
        "SOCKS 123.54.197.50:21069",
        "SOCKS 47.251.87.199:8008",
        "SOCKS 123.54.197.52:20955",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 152.53.171.242:20547",
        "SOCKS 123.54.197.21:20284",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 152.53.171.242:21909",
        "SOCKS 8.212.178.171:80",
        "SOCKS 178.22.31.205:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}