function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:8123",
        "SOCKS 157.66.236.27:1080",
        "SOCKS 45.74.31.42:7773",
        "SOCKS 195.19.50.126:1080",
        "SOCKS 195.98.82.63:1080",
        "SOCKS 193.233.86.198:8080",
        "SOCKS 85.198.91.145:1081",
        "SOCKS 31.76.31.241:1080",
        "SOCKS 150.242.218.137:1080",
        "SOCKS 93.123.118.15:1080",
        "SOCKS 5.249.165.195:20000",
        "SOCKS 91.195.86.221:1080",
        "SOCKS 118.145.141.251:44155",
        "SOCKS 161.35.90.93:1082",
        "SOCKS 46.146.242.142:1080",
        "SOCKS 47.237.138.184:1080",
        "SOCKS 187.190.127.212:80",
        "SOCKS 118.145.141.251:44156",
        "SOCKS 45.74.31.42:28478",
        "SOCKS 118.145.141.251:44008",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}