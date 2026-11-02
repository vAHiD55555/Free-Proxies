function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 128.90.109.42:1080",
        "SOCKS 150.109.246.234:1080",
        "SOCKS 39.104.23.154:1212",
        "SOCKS 69.174.54.89:12750",
        "SOCKS 195.13.182.211:8080",
        "SOCKS 45.74.31.40:15649",
        "SOCKS 46.29.162.212:1080",
        "SOCKS 45.74.31.41:7990",
        "SOCKS 185.254.198.182:1080",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 103.134.220.49:1080",
        "SOCKS 154.12.58.81:1080",
        "SOCKS 38.147.191.16:1081",
        "SOCKS 81.29.249.82:5071",
        "SOCKS 166.159.225.66:1080",
        "SOCKS 138.2.146.227:9104",
        "SOCKS 93.174.133.167:10808",
        "SOCKS 45.74.31.41:6524",
        "SOCKS 45.74.31.41:4657",
        "SOCKS 212.237.219.102:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}