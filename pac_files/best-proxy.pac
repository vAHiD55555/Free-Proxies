function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.210.79:16379",
        "SOCKS 103.39.51.184:8080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 152.53.36.101:44793",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 152.53.36.101:12153",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 72.10.160.172:19021",
        "SOCKS 117.74.65.207:443",
        "SOCKS 182.160.106.205:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 152.53.171.242:33719",
        "SOCKS 8.222.244.156:1011",
        "SOCKS 125.25.33.65:8080",
        "SOCKS 157.180.121.252:15303",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}