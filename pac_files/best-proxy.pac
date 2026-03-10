function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.9.15.186:10080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 213.202.225.11:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 212.41.30.108:10808",
        "SOCKS 200.76.28.202:999",
        "SOCKS 206.123.156.213:5784",
        "SOCKS 206.123.156.180:41267",
        "SOCKS 206.123.156.179:33528",
        "SOCKS 179.96.28.58:80",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 120.77.203.0:443",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 202.58.77.19:3127",
        "SOCKS 124.108.19.6:9292",
        "SOCKS 120.224.234.71:7300",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}