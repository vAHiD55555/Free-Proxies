function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.150.44:1080",
        "SOCKS 193.221.203.14:1080",
        "SOCKS 137.184.33.38:3128",
        "SOCKS 45.74.31.30:7074",
        "SOCKS 165.140.167.167:9050",
        "SOCKS 91.107.243.254:9096",
        "SOCKS 93.87.38.20:1090",
        "SOCKS 202.62.42.92:1080",
        "SOCKS 107.173.230.93:40000",
        "SOCKS 116.241.240.176:11080",
        "SOCKS 8.213.128.6:1337",
        "SOCKS 91.188.213.143:1080",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 174.138.165.213:55555",
        "SOCKS 72.56.94.27:1081",
        "SOCKS 202.62.52.20:1080",
        "SOCKS 45.74.31.30:4704",
        "SOCKS 47.89.159.212:13",
        "SOCKS 93.183.88.197:9053",
        "SOCKS 188.166.217.100:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}