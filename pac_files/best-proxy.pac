function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 92.42.15.29:1080",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 206.123.156.199:35877",
        "SOCKS 72.56.59.62:63133",
        "SOCKS 206.123.156.254:4705",
        "SOCKS 36.147.78.166:80",
        "SOCKS 206.123.156.230:11221",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 206.123.156.185:4245",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 38.76.200.182:58367",
        "SOCKS 20.3.145.242:50161",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 113.121.240.114:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}