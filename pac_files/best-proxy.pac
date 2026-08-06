function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 149.28.87.103:8888",
        "SOCKS 203.189.135.105:1080",
        "SOCKS 180.173.164.82:1088",
        "SOCKS 119.28.13.138:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 141.11.187.9:10800",
        "SOCKS 47.90.149.238:1081",
        "SOCKS 81.200.158.126:10808",
        "SOCKS 185.175.229.58:1080",
        "SOCKS 89.191.226.51:1080",
        "SOCKS 103.134.220.49:1080",
        "SOCKS 158.220.101.43:1080",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 66.175.236.184:1080",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 13.38.217.179:29788",
        "SOCKS 217.175.35.149:1080",
        "SOCKS 95.85.242.7:9050",
        "SOCKS 82.29.72.145:30501",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}