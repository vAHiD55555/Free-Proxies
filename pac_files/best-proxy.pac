function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.165.233.121:9151",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 188.165.220.50:62878",
        "SOCKS 27.79.156.0:16000",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 27.79.204.37:16000",
        "SOCKS 91.121.208.196:5062",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 171.228.141.131:10089",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 38.211.24.18:8080",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 179.96.28.58:80",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 27.79.206.225:16000",
        "SOCKS 72.10.160.93:26713",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}