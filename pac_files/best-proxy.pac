function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.62.50:1088",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 159.65.230.91:20613",
        "SOCKS 47.82.66.142:1080",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 156.244.39.83:20002",
        "SOCKS 46.105.189.70:1090",
        "SOCKS 169.57.157.148:80",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 36.147.78.166:80",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 148.251.88.242:1080",
        "SOCKS 144.31.29.22:1080",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 43.160.195.20:20005",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 31.59.129.75:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}