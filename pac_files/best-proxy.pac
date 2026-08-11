function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.176.118.150:1080",
        "SOCKS 103.142.190.78:10808",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 88.99.82.67:443",
        "SOCKS 141.148.65.110:1081",
        "SOCKS 147.45.221.115:1082",
        "SOCKS 103.56.206.77:8099",
        "SOCKS 110.235.252.74:1080",
        "SOCKS 144.31.75.120:11112",
        "SOCKS 51.15.253.45:8080",
        "SOCKS 87.239.251.202:1081",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 190.142.231.96:999",
        "SOCKS 31.57.172.220:10808",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 66.59.197.62:4000",
        "SOCKS 165.154.3.4:10808",
        "SOCKS 176.37.107.86:11111",
        "SOCKS 124.248.191.117:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}