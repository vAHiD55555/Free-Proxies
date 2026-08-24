function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:4426",
        "SOCKS 111.119.162.248:10932",
        "SOCKS 195.133.65.238:10909",
        "SOCKS 31.56.32.59:10800",
        "SOCKS 72.18.53.189:9119",
        "SOCKS 138.2.216.186:1080",
        "SOCKS 45.74.31.42:26083",
        "SOCKS 202.62.50.52:1080",
        "SOCKS 177.52.25.34:1080",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 144.31.222.106:7890",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 45.74.31.30:5198",
        "SOCKS 202.70.156.235:3000",
        "SOCKS 186.219.210.17:7080",
        "SOCKS 82.114.228.67:1080",
        "SOCKS 45.74.31.42:9898",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 45.74.31.42:7026",
        "SOCKS 59.46.216.131:30001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}