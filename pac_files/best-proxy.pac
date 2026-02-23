function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 204.93.169.232:60755",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 132.145.93.138:1080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 14.56.118.64:3128",
        "SOCKS 119.81.189.194:80",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 190.210.62.131:8080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 123.54.197.18:20834",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 107.173.35.245:1080",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 105.190.81.23:50161",
        "SOCKS 61.171.50.169:6688",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}