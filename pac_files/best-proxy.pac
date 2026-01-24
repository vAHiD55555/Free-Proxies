function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.34.95.110:8080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 36.255.98.167:9494",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 36.255.98.177:7770",
        "SOCKS 36.255.98.165:4995",
        "SOCKS 62.60.131.189:5042",
        "SOCKS 62.60.131.204:11713",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 146.103.103.183:35854",
        "SOCKS 88.99.30.148:5051",
        "SOCKS 95.216.91.217:3128",
        "SOCKS 36.255.98.180:4144",
        "SOCKS 62.60.131.253:7649",
        "SOCKS 36.255.98.163:4309",
        "SOCKS 36.255.98.180:5394",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 62.60.131.179:20421",
        "SOCKS 188.166.104.152:49981",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}