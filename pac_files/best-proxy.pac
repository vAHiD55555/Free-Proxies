function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.133.82.62:44208",
        "SOCKS 93.100.133.197:1080",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 167.86.79.35:1080",
        "SOCKS 46.146.242.142:1080",
        "SOCKS 118.145.141.251:44168",
        "SOCKS 110.76.144.112:1080",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 109.73.181.237:7080",
        "SOCKS 118.145.141.251:44171",
        "SOCKS 142.93.21.46:61616",
        "SOCKS 47.91.89.3:4000",
        "SOCKS 95.163.220.107:10808",
        "SOCKS 103.242.105.199:8199",
        "SOCKS 66.59.197.63:3128",
        "SOCKS 158.220.101.43:1080",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 77.239.96.194:1081",
        "SOCKS 70.166.65.160:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}