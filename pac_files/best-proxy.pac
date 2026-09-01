function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 78.159.131.108:1082",
        "SOCKS 92.205.186.129:1080",
        "SOCKS 37.195.116.105:1080",
        "SOCKS 87.107.109.74:10809",
        "SOCKS 45.32.192.240:9000",
        "SOCKS 161.97.106.223:9050",
        "SOCKS 144.24.15.246:1080",
        "SOCKS 174.138.162.35:54262",
        "SOCKS 165.227.127.60:1080",
        "SOCKS 3.16.21.42:3128",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 185.252.147.44:1080",
        "SOCKS 213.230.121.41:1080",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 183.90.187.248:9050",
        "SOCKS 65.20.105.241:10001",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 45.74.31.42:7973",
        "SOCKS 176.192.41.172:4444",
        "SOCKS 152.228.134.176:48080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}