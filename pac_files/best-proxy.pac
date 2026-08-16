function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.25.158.95:1080",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 216.106.179.216:49204",
        "SOCKS 194.163.174.78:1080",
        "SOCKS 95.31.144.233:1080",
        "SOCKS 202.40.190.74:1080",
        "SOCKS 5.35.87.208:1081",
        "SOCKS 116.96.32.160:1088",
        "SOCKS 104.154.186.48:80",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 72.56.32.184:1080",
        "SOCKS 45.95.233.128:1082",
        "SOCKS 146.235.220.109:9050",
        "SOCKS 178.130.47.50:1082",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 77.110.114.114:1080",
        "SOCKS 152.32.168.221:10808",
        "SOCKS 109.172.7.42:1080",
        "SOCKS 195.19.50.130:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}