function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.211.194.85:9080",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 49.0.0.175:1080",
        "SOCKS 178.250.156.112:443",
        "SOCKS 47.251.87.74:20125",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 47.237.110.50:1080",
        "SOCKS 68.233.127.229:1080",
        "SOCKS 193.32.177.152:1080",
        "SOCKS 146.235.231.249:1080",
        "SOCKS 217.77.223.2:9050",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 77.247.178.20:3129",
        "SOCKS 65.109.176.0:2080",
        "SOCKS 49.87.198.105:8989",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 103.197.242.95:1080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 199.168.131.234:1080",
        "SOCKS 221.176.85.236:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}