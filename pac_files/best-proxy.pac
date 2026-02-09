function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.121.240.114:3256",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 103.66.197.2:8080",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 152.53.171.242:27391",
        "SOCKS 35.225.22.61:80",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 152.53.171.242:25306",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 152.53.171.242:24898",
        "SOCKS 152.53.171.242:24769",
        "SOCKS 152.53.171.242:14027",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 202.62.55.43:1080",
        "SOCKS 37.200.67.75:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}