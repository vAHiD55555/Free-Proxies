function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.21.252.66:10811",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 2.144.6.22:9090",
        "SOCKS 169.155.50.87:1080",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 103.161.104.99:1080",
        "SOCKS 118.145.141.251:44100",
        "SOCKS 112.90.88.102:20000",
        "SOCKS 8.210.17.35:9098",
        "SOCKS 128.199.37.92:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 45.76.13.121:49995",
        "SOCKS 76.144.40.133:9050",
        "SOCKS 85.209.120.145:1080",
        "SOCKS 216.106.179.216:49451",
        "SOCKS 94.73.251.19:1080",
        "SOCKS 31.76.80.215:1080",
        "SOCKS 88.119.171.249:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}