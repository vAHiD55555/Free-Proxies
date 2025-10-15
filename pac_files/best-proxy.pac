function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:16043",
        "SOCKS 85.132.37.9:1313",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 152.53.36.101:10521",
        "SOCKS 65.108.251.40:12359",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 47.82.76.92:5555",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 103.227.24.194:3128",
        "SOCKS 91.219.101.244:3128",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 185.93.89.146:5101",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 198.54.124.88:8080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 65.108.251.40:39169",
        "SOCKS 103.151.30.133:1080",
        "SOCKS 152.53.36.101:27360",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}