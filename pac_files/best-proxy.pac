function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.133.219.4:63434",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 196.204.83.232:1981",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 203.189.154.20:1080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 54.215.46.91:20087",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}