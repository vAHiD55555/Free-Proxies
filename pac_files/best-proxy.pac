function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 213.109.203.117:1080",
        "SOCKS 43.106.60.21:1080",
        "SOCKS 91.228.133.191:8888",
        "SOCKS 46.146.223.102:1080",
        "SOCKS 152.32.168.221:10808",
        "SOCKS 216.106.179.216:49180",
        "SOCKS 101.255.157.6:8080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 47.81.56.193:8888",
        "SOCKS 91.107.168.126:10808",
        "SOCKS 194.163.174.78:1090",
        "SOCKS 167.86.79.35:1080",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 85.198.64.67:8080",
        "SOCKS 46.146.204.175:1080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 150.242.218.137:1080",
        "SOCKS 66.59.197.61:3128",
        "SOCKS 59.46.216.131:30001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}