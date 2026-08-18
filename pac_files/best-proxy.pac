function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.135.164.115:9050",
        "SOCKS 47.91.29.151:9098",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 161.97.106.223:9050",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 41.33.219.140:1976",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 34.174.40.246:1080",
        "SOCKS 147.45.60.110:1082",
        "SOCKS 31.56.222.140:9083",
        "SOCKS 80.209.242.189:1080",
        "SOCKS 110.235.240.135:1080",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 46.224.63.79:9050",
        "SOCKS 47.91.29.151:81",
        "SOCKS 185.212.47.95:8080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 118.145.141.251:44108",
        "SOCKS 103.134.221.52:1111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}