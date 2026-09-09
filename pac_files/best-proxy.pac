function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 2.26.112.72:1080",
        "SOCKS 45.74.31.42:5791",
        "SOCKS 103.157.78.22:8199",
        "SOCKS 203.189.152.79:1080",
        "SOCKS 45.74.31.41:4740",
        "SOCKS 61.9.32.30:58765",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 45.74.31.30:39512",
        "SOCKS 195.161.132.106:7776",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 122.117.18.15:1080",
        "SOCKS 51.15.253.45:8080",
        "SOCKS 65.109.219.215:9089",
        "SOCKS 47.250.155.254:28",
        "SOCKS 47.250.155.254:10004",
        "SOCKS 119.188.131.55:17981",
        "SOCKS 111.206.4.163:18888",
        "SOCKS 58.187.162.191:1083",
        "SOCKS 45.74.31.42:4974",
        "SOCKS 79.137.196.250:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}