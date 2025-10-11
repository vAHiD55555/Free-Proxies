function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.5.47.181:1080",
        "SOCKS 38.194.231.70:999",
        "SOCKS 123.128.12.93:9050",
        "SOCKS 47.79.94.191:1122",
        "SOCKS 45.190.52.24:8080",
        "SOCKS 47.89.184.18:3128",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 95.47.239.65:3128",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 52.47.164.226:9304",
        "SOCKS 114.80.37.90:3081",
        "SOCKS 176.119.16.40:8534",
        "SOCKS 187.111.144.102:8080",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 47.79.20.192:1122",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 103.189.218.85:6969",
        "SOCKS 103.192.158.115:46",
        "SOCKS 34.222.65.100:1976",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}