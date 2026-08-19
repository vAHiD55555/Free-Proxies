function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.144.53.63:5000",
        "SOCKS 185.175.229.58:1080",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 118.145.141.251:44168",
        "SOCKS 194.163.174.78:1082",
        "SOCKS 34.87.80.221:30000",
        "SOCKS 195.19.50.126:1080",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 185.179.188.54:1080",
        "SOCKS 152.228.134.176:48080",
        "SOCKS 146.0.77.29:9050",
        "SOCKS 109.201.65.228:1080",
        "SOCKS 23.95.106.31:9150",
        "SOCKS 91.228.133.191:8888",
        "SOCKS 120.133.82.62:44156",
        "SOCKS 45.76.164.255:1085",
        "SOCKS 103.138.145.228:1999",
        "SOCKS 5.104.75.62:12000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}