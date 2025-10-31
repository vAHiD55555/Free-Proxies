function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 93.124.40.198:7788",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 8.212.151.166:80",
        "SOCKS 213.230.121.73:3128",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 207.254.28.68:2025",
        "SOCKS 157.230.220.25:4857",
        "SOCKS 117.20.64.44:56981",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 47.82.97.147:1100",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 120.77.203.0:443",
        "SOCKS 182.160.109.166:1080",
        "SOCKS 8.217.231.95:3356",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 188.120.245.247:12432",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}