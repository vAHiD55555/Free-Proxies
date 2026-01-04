function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.150.102.26:1080",
        "SOCKS 8.220.204.215:9080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 221.202.27.194:10807",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 57.155.113.7:3128",
        "SOCKS 43.167.247.63:6006",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 62.60.131.179:5579",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 43.133.9.88:6006",
        "SOCKS 115.127.106.226:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}