function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.127:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 67.43.228.251:17383",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 18.141.177.23:80",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 178.216.223.147:1080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 46.0.205.4:1080",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 8.222.151.218:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}