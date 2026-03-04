function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.160.195.20:20005",
        "SOCKS 206.123.156.249:5977",
        "SOCKS 206.123.156.200:6157",
        "SOCKS 160.20.55.235:8080",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 206.123.156.251:8686",
        "SOCKS 206.123.156.234:4673",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 13.70.6.6:50161",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 20.3.145.242:50161",
        "SOCKS 103.155.64.182:8080",
        "SOCKS 103.74.192.243:7890",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 183.81.91.186:1088",
        "SOCKS 177.11.49.41:1088",
        "SOCKS 185.26.181.241:80",
        "SOCKS 120.26.147.60:7890",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 45.129.140.213:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}