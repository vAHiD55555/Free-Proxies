function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 150.136.67.40:9050",
        "SOCKS 195.114.7.6:1080",
        "SOCKS 160.250.54.5:9000",
        "SOCKS 110.235.247.206:1080",
        "SOCKS 222.102.194.158:1111",
        "SOCKS 5.249.165.195:20000",
        "SOCKS 202.62.52.20:1080",
        "SOCKS 159.223.88.58:1080",
        "SOCKS 59.152.97.233:1080",
        "SOCKS 193.233.86.198:8080",
        "SOCKS 8.211.49.86:9050",
        "SOCKS 85.122.120.119:30016",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 34.65.99.32:3128",
        "SOCKS 103.142.255.32:1080",
        "SOCKS 103.118.85.144:1080",
        "SOCKS 178.128.215.74:1080",
        "SOCKS 111.119.162.248:10938",
        "SOCKS 45.194.41.73:8080",
        "SOCKS 103.81.110.137:3125",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}