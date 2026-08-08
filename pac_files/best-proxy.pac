function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.86.79.35:1080",
        "SOCKS 43.134.58.45:1080",
        "SOCKS 88.218.206.170:22",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 176.120.28.106:8080",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 193.180.215.113:18081",
        "SOCKS 170.106.177.188:47783",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 218.70.229.168:1081",
        "SOCKS 149.129.226.9:9090",
        "SOCKS 185.200.176.236:1080",
        "SOCKS 23.27.141.243:3080",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 158.94.216.164:9120",
        "SOCKS 46.37.123.166:1081",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 8.213.156.191:3541",
        "SOCKS 8.213.156.191:6379",
        "SOCKS 176.12.65.24:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}