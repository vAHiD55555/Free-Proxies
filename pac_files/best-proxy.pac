function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.166.39.13:3128",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 89.58.45.94:12454",
        "SOCKS 89.58.45.94:32160",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 88.247.164.26:8090",
        "SOCKS 190.12.0.66:8080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 58.147.171.38:28526",
        "SOCKS 185.151.86.86:3699",
        "SOCKS 8.215.3.250:8008",
        "SOCKS 82.223.165.28:18356",
        "SOCKS 101.91.242.198:6688",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}