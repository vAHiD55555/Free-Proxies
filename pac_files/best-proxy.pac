function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.234.100.149:1080",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 192.238.177.213:1081",
        "SOCKS 8.213.128.6:102",
        "SOCKS 8.213.128.6:9091",
        "SOCKS 47.82.121.250:1011",
        "SOCKS 83.222.24.37:1080",
        "SOCKS 89.19.214.171:1080",
        "SOCKS 34.229.113.62:1080",
        "SOCKS 130.193.43.183:1080",
        "SOCKS 45.76.164.255:1085",
        "SOCKS 91.142.85.134:1080",
        "SOCKS 103.151.74.29:2025",
        "SOCKS 79.105.155.166:1080",
        "SOCKS 188.243.127.6:1080",
        "SOCKS 93.123.118.15:1080",
        "SOCKS 92.118.234.124:1080",
        "SOCKS 87.121.104.134:1080",
        "SOCKS 160.250.54.7:9000",
        "SOCKS 46.8.31.104:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}