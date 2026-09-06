function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.155.68:1080",
        "SOCKS 84.8.248.36:3128",
        "SOCKS 45.74.31.30:40471",
        "SOCKS 45.74.31.30:7303",
        "SOCKS 37.27.63.151:35035",
        "SOCKS 91.92.242.21:40121",
        "SOCKS 72.56.73.224:80",
        "SOCKS 103.66.46.54:69",
        "SOCKS 43.160.245.155:8080",
        "SOCKS 111.119.162.248:10934",
        "SOCKS 51.250.6.232:1080",
        "SOCKS 107.181.252.58:1081",
        "SOCKS 174.138.162.37:36230",
        "SOCKS 91.197.79.59:1080",
        "SOCKS 13.125.44.24:80",
        "SOCKS 159.195.194.242:8080",
        "SOCKS 45.74.31.30:4958",
        "SOCKS 65.109.196.122:2091",
        "SOCKS 45.74.31.30:5067",
        "SOCKS 72.195.34.35:27360",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}