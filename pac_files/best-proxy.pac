function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.166.132.124:3000",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 212.113.112.84:1080",
        "SOCKS 67.211.219.122:8888",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 82.223.165.28:38245",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 185.93.89.145:4085",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 179.96.28.58:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}