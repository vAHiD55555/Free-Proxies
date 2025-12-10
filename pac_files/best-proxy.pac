function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.133.214:16379",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 152.53.171.242:47475",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 152.53.171.242:56433",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 54.173.77.49:8080",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 78.12.249.123:8796",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 18.135.126.187:8080",
        "SOCKS 128.140.76.145:30149",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 176.124.219.49:3128",
        "SOCKS 194.87.77.22:80",
        "SOCKS 67.43.228.251:9217",
        "SOCKS 62.210.37.74:8012",
        "SOCKS 51.158.124.167:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}