function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 111.61.73.175:7302",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 103.189.218.85:6969",
        "SOCKS 103.195.6.226:30009",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 103.195.5.78:30006",
        "SOCKS 169.57.157.148:80",
        "SOCKS 13.229.47.109:80",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 103.195.5.78:30071",
        "SOCKS 103.195.5.78:30074",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 103.195.5.78:30019",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 38.76.200.182:58367",
        "SOCKS 3.24.178.81:80",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 159.65.230.91:20433",
        "SOCKS 217.172.122.14:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}