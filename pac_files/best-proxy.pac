function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.81.31.215:80",
        "SOCKS 5.128.73.5:1080",
        "SOCKS 45.144.234.129:52028",
        "SOCKS 181.79.81.104:8080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 37.221.193.221:24824",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 37.221.193.221:23652",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 37.221.193.221:19138",
        "SOCKS 37.221.193.221:55049",
        "SOCKS 37.221.193.221:28892",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 152.53.171.242:15881",
        "SOCKS 37.221.193.221:59793",
        "SOCKS 117.74.65.207:443",
        "SOCKS 97.79.251.186:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}