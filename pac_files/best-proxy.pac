function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.118.85.75:1080",
        "SOCKS 180.125.38.174:8989",
        "SOCKS 95.31.48.157:60000",
        "SOCKS 45.74.31.47:8891",
        "SOCKS 45.74.31.47:6061",
        "SOCKS 45.74.31.41:6575",
        "SOCKS 45.74.31.40:7901",
        "SOCKS 103.161.104.99:1080",
        "SOCKS 45.74.31.47:7714",
        "SOCKS 45.74.31.41:7081",
        "SOCKS 45.55.71.43:1080",
        "SOCKS 45.74.31.47:8948",
        "SOCKS 45.74.31.41:10454",
        "SOCKS 80.82.40.129:1080",
        "SOCKS 212.77.75.25:1088",
        "SOCKS 92.255.78.187:1080",
        "SOCKS 45.74.31.42:6156",
        "SOCKS 45.74.31.46:4222",
        "SOCKS 45.74.31.46:8371",
        "SOCKS 45.74.31.46:9236",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}