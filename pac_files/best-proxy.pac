function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.151.88.220:6618",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 144.124.227.90:21074",
        "SOCKS 125.128.12.34:3128",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 3.24.178.81:80",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 179.96.28.58:80",
        "SOCKS 125.128.12.214:3128",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 47.83.199.137:58367",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 103.135.102.161:8081",
        "SOCKS 5.133.219.4:63434",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}