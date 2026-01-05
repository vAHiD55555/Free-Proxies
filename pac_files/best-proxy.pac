function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.200.191.44:16606",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 107.175.232.156:7080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 115.127.105.163:6699",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 62.60.131.180:4373",
        "SOCKS 103.151.75.21:2025",
        "SOCKS 177.234.226.83:1994",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 37.59.112.197:80",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 181.214.39.51:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}