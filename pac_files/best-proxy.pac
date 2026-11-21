function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.113.182.218:1080",
        "SOCKS 144.172.115.86:1080",
        "SOCKS 223.72.47.33:6080",
        "SOCKS 45.74.31.42:28370",
        "SOCKS 212.231.230.141:18500",
        "SOCKS 87.107.68.231:1081",
        "SOCKS 185.95.165.114:1080",
        "SOCKS 82.22.2.223:1080",
        "SOCKS 42.114.69.219:20001",
        "SOCKS 109.194.174.104:1080",
        "SOCKS 194.135.46.60:443",
        "SOCKS 109.111.79.212:2080",
        "SOCKS 39.104.69.76:8008",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 47.82.76.35:1011",
        "SOCKS 65.109.219.215:9094",
        "SOCKS 47.251.74.38:80",
        "SOCKS 85.115.209.63:1085",
        "SOCKS 220.121.193.144:1082",
        "SOCKS 81.23.182.162:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}