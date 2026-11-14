function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 165.154.173.250:8082",
        "SOCKS 58.187.104.62:1081",
        "SOCKS 66.179.31.117:18080",
        "SOCKS 175.161.75.215:1080",
        "SOCKS 176.192.207.249:1080",
        "SOCKS 89.207.250.100:1080",
        "SOCKS 45.74.31.41:4111",
        "SOCKS 37.77.148.12:9101",
        "SOCKS 45.74.31.41:24492",
        "SOCKS 45.74.31.47:4022",
        "SOCKS 85.239.144.86:1080",
        "SOCKS 45.74.31.42:13723",
        "SOCKS 110.39.13.162:1080",
        "SOCKS 27.69.165.83:5327",
        "SOCKS 5.140.110.96:1080",
        "SOCKS 31.56.189.176:10809",
        "SOCKS 130.17.13.182:8080",
        "SOCKS 45.77.245.8:1081",
        "SOCKS 95.217.167.252:11119",
        "SOCKS 47.107.48.145:8020",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}