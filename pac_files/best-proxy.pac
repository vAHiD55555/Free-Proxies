function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.211.200.183:9098",
        "SOCKS 107.152.45.72:8888",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 181.129.183.19:53281",
        "SOCKS 193.227.129.215:52203",
        "SOCKS 119.18.148.113:63636",
        "SOCKS 179.48.80.9:8085",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 103.19.130.50:8080",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 149.28.134.107:2020",
        "SOCKS 5.61.62.24:8118",
        "SOCKS 113.128.33.60:53405",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}