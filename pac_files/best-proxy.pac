function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.245.117.43:80",
        "SOCKS 8.211.51.115:3128",
        "SOCKS 95.165.157.102:1081",
        "SOCKS 35.206.248.95:1080",
        "SOCKS 159.100.20.206:27866",
        "SOCKS 45.77.37.39:2030",
        "SOCKS 34.69.61.247:80",
        "SOCKS 193.168.198.240:1080",
        "SOCKS 8.211.170.91:14680",
        "SOCKS 160.30.104.170:1256",
        "SOCKS 157.151.196.142:1080",
        "SOCKS 38.111.103.17:8080",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 45.133.16.88:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 103.119.60.219:1080",
        "SOCKS 68.183.7.53:9100",
        "SOCKS 138.3.218.141:54261",
        "SOCKS 85.209.132.156:8000",
        "SOCKS 88.218.206.170:5432",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}