function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 3.24.178.81:80",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 159.65.230.91:20540",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 194.135.17.31:1080",
        "SOCKS 193.32.178.160:57329",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 213.21.233.242:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 216.126.234.4:58367",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 177.93.35.116:999",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 61.72.221.74:3128",
        "SOCKS 103.195.5.78:30599",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 194.233.78.142:42495",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}