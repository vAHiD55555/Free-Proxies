function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 106.52.187.222:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 223.27.82.91:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 68.71.241.33:4145",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 103.86.131.62:80",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 62.60.151.128:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}