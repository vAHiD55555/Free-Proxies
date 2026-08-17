function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.160.255.142:7890",
        "SOCKS 161.35.90.93:1083",
        "SOCKS 103.43.191.71:8888",
        "SOCKS 149.248.21.106:8080",
        "SOCKS 62.109.30.179:1080",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 46.17.43.219:7890",
        "SOCKS 111.119.162.248:10936",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 188.166.120.48:1080",
        "SOCKS 117.28.128.114:10800",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 111.119.162.248:10913",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 195.19.51.79:1080",
        "SOCKS 103.150.206.77:1080",
        "SOCKS 154.203.132.81:5080",
        "SOCKS 195.19.50.85:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}