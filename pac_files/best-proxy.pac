function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:32883",
        "SOCKS 103.145.30.46:1452",
        "SOCKS 62.60.131.181:8080",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 193.233.254.8:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 117.74.65.207:443",
        "SOCKS 67.43.228.254:30337",
        "SOCKS 115.127.182.130:2589",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 120.77.203.0:443",
        "SOCKS 115.127.181.6:2589",
        "SOCKS 24.102.236.218:8888",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 115.127.176.210:2589",
        "SOCKS 80.85.245.5:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}