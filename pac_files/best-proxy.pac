function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.58.97.165:9050",
        "SOCKS 95.163.176.131:1080",
        "SOCKS 45.38.210.105:9050",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 31.25.236.95:1080",
        "SOCKS 60.186.3.62:10808",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 202.62.62.113:1080",
        "SOCKS 216.106.179.216:49340",
        "SOCKS 37.27.63.151:11671",
        "SOCKS 82.207.117.120:8080",
        "SOCKS 185.193.25.206:9050",
        "SOCKS 118.145.141.251:44126",
        "SOCKS 118.145.141.251:44108",
        "SOCKS 45.77.37.39:2020",
        "SOCKS 104.194.132.112:9052",
        "SOCKS 103.82.23.118:6175",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 51.15.253.45:8080",
        "SOCKS 43.252.237.169:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}