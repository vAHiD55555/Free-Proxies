function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.145.208.216:8443",
        "SOCKS 45.122.122.71:8080",
        "SOCKS 38.145.203.35:8443",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 206.123.156.206:4777",
        "SOCKS 38.34.179.33:8443",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 206.123.156.185:7006",
        "SOCKS 38.145.220.33:8448",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 206.123.156.227:31941",
        "SOCKS 38.145.220.27:8443",
        "SOCKS 38.145.220.38:8443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}