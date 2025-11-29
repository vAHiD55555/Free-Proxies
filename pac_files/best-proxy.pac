function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.73.161.148:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 57.129.35.4:1220",
        "SOCKS 152.53.36.101:12232",
        "SOCKS 152.53.36.101:54722",
        "SOCKS 67.43.228.251:12125",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 74.50.77.58:9090",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 216.218.249.27:8181",
        "SOCKS 152.53.36.101:37463",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 38.183.144.25:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 183.166.132.124:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}