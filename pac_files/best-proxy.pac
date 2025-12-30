function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 75.119.158.241:10801",
        "SOCKS 85.172.55.85:1080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 81.143.236.200:443",
        "SOCKS 147.45.170.65:1080",
        "SOCKS 160.19.16.86:1080",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 120.77.203.0:443",
        "SOCKS 141.98.112.161:61337",
        "SOCKS 5.129.214.202:10521",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 36.255.98.175:8382",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 111.68.1.26:8123",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 115.127.181.6:2589",
        "SOCKS 80.85.245.37:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}