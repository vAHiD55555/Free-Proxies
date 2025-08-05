function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.59.228.95:8118",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 160.19.16.66:8192",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 42.119.98.149:16000",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 191.243.46.33:43241",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 51.79.152.84:60009",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 172.104.240.74:9053",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}