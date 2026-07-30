function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.124.26.19:1080",
        "SOCKS 38.55.145.46:1080",
        "SOCKS 37.194.204.99:3080",
        "SOCKS 216.227.168.3:9111",
        "SOCKS 170.106.142.217:9050",
        "SOCKS 195.19.50.174:1080",
        "SOCKS 185.171.83.65:49153",
        "SOCKS 116.104.234.188:2063",
        "SOCKS 107.161.168.159:3333",
        "SOCKS 160.250.54.7:9000",
        "SOCKS 150.241.96.73:1080",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 147.15.17.132:1083",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 147.15.122.136:1082",
        "SOCKS 173.255.248.203:9050",
        "SOCKS 58.210.9.66:10057",
        "SOCKS 45.93.170.251:888",
        "SOCKS 43.155.185.73:1080",
        "SOCKS 103.165.128.75:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}