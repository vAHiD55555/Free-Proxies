function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 94.100.18.111:3128",
        "SOCKS 58.19.55.17:15067",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 58.19.55.17:15162",
        "SOCKS 58.19.55.17:15271",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 58.19.55.17:15128",
        "SOCKS 13.229.47.109:80",
        "SOCKS 194.233.68.54:1088",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 58.19.55.17:15158",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 206.123.156.185:5206",
        "SOCKS 146.235.19.84:10888",
        "SOCKS 46.99.178.155:1339",
        "SOCKS 102.0.18.198:8080",
        "SOCKS 103.242.175.241:8899",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}