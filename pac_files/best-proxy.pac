function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.31.14.121:9050",
        "SOCKS 8.213.128.6:4006",
        "SOCKS 203.189.152.79:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 121.237.181.137:8888",
        "SOCKS 5.75.168.247:8056",
        "SOCKS 160.250.54.9:9000",
        "SOCKS 37.44.238.2:57167",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 5.75.168.247:8057",
        "SOCKS 213.184.149.74:1080",
        "SOCKS 77.105.142.165:1080",
        "SOCKS 193.233.72.56:988",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 158.179.173.238:1080",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 184.95.235.194:1080",
        "SOCKS 185.193.25.181:9050",
        "SOCKS 134.122.1.61:11679",
        "SOCKS 15.204.235.27:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}