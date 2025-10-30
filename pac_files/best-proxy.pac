function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.237.132.36:1025",
        "SOCKS 65.109.27.32:1080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 152.53.36.101:27857",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 103.72.89.27:8097",
        "SOCKS 8.218.39.40:10800",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 47.83.8.254:1100",
        "SOCKS 47.97.51.9:8222",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 119.18.149.83:65388",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 159.224.213.97:8470",
        "SOCKS 121.43.196.210:8222",
        "SOCKS 117.74.65.207:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}