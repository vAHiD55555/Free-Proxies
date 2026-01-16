function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.171.50.169:6688",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 62.60.131.188:4141",
        "SOCKS 185.118.51.133:3128",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 8.130.90.177:3128",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 78.12.143.148:20000",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 62.60.131.185:4220",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 51.222.241.8:42378",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}