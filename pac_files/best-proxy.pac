function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.146.216.44:1080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 91.228.133.191:8888",
        "SOCKS 157.20.27.132:1080",
        "SOCKS 109.172.7.42:1080",
        "SOCKS 195.46.164.196:1080",
        "SOCKS 85.175.219.236:1080",
        "SOCKS 5.161.50.82:8118",
        "SOCKS 109.123.251.109:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 47.251.87.199:999",
        "SOCKS 47.251.87.199:2012",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 146.0.77.29:9050",
        "SOCKS 15.235.176.12:1082",
        "SOCKS 146.235.231.249:1080",
        "SOCKS 154.203.132.81:5080",
        "SOCKS 111.119.162.248:10910",
        "SOCKS 171.253.95.238:1041",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}