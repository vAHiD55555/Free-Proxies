function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.6.105.152:4216",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 118.70.151.55:1080",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 124.248.184.247:1080",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 179.96.28.58:80",
        "SOCKS 8.211.195.173:55555",
        "SOCKS 120.77.203.0:443",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 203.189.152.141:1080",
        "SOCKS 8.212.157.10:8080",
        "SOCKS 154.236.177.105:1976",
        "SOCKS 82.22.245.171:5995",
        "SOCKS 188.235.21.247:2080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}