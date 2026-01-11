function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 169.57.157.146:8123",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 52.38.230.247:3128",
        "SOCKS 163.5.128.53:14270",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 124.248.177.44:1080",
        "SOCKS 72.10.160.93:17981",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 103.186.193.135:8080",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 194.28.61.21:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 152.228.212.223:29272",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}