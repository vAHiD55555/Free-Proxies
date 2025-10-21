function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:12000",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 185.93.89.183:8010",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 54.154.27.41:357",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 179.96.28.58:80",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 91.205.172.113:3120",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 152.53.171.242:18777",
        "SOCKS 137.184.152.66:20172",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 200.85.167.254:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}