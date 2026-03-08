function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.57.0.163:8888",
        "SOCKS 45.129.140.213:1080",
        "SOCKS 181.129.183.19:53281",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 160.179.227.52:17464",
        "SOCKS 103.156.14.26:8080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 213.165.58.6:1080",
        "SOCKS 14.56.177.44:3128",
        "SOCKS 62.217.176.47:1080",
        "SOCKS 45.136.198.40:3128",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 206.123.156.184:26923",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 116.254.118.180:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}