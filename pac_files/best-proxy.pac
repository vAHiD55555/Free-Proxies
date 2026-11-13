function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 198.46.175.249:1082",
        "SOCKS 103.191.218.119:69",
        "SOCKS 49.87.33.209:8989",
        "SOCKS 172.86.117.246:1080",
        "SOCKS 45.74.31.46:17710",
        "SOCKS 82.142.130.102:1080",
        "SOCKS 159.223.167.188:10000",
        "SOCKS 124.158.164.149:1080",
        "SOCKS 192.124.181.25:1080",
        "SOCKS 85.192.26.216:3128",
        "SOCKS 72.56.106.48:443",
        "SOCKS 8.213.156.191:443",
        "SOCKS 58.23.77.84:1081",
        "SOCKS 174.138.165.205:36030",
        "SOCKS 185.173.179.184:1080",
        "SOCKS 111.119.162.248:10936",
        "SOCKS 77.105.130.192:10808",
        "SOCKS 176.208.114.114:1080",
        "SOCKS 95.73.120.199:1080",
        "SOCKS 37.122.149.64:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}