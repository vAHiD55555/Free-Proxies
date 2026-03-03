function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.128.167.129:1080",
        "SOCKS 91.200.163.190:8088",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 206.123.156.226:7682",
        "SOCKS 213.165.58.7:1080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 58.19.55.17:15104",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 58.19.55.17:15079",
        "SOCKS 206.123.156.253:32560",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 193.233.254.77:1080",
        "SOCKS 206.123.156.228:5678",
        "SOCKS 58.19.55.17:15041",
        "SOCKS 74.48.52.131:50161",
        "SOCKS 118.70.151.55:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}