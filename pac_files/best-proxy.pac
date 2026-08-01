function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.209.29.226:1080",
        "SOCKS 43.167.226.158:6666",
        "SOCKS 38.55.215.110:5555",
        "SOCKS 31.76.80.215:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 217.77.223.2:9050",
        "SOCKS 217.60.245.29:4080",
        "SOCKS 80.72.180.122:1080",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 185.133.239.244:32784",
        "SOCKS 140.245.238.56:53",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 115.127.181.114:6969",
        "SOCKS 47.82.108.195:1011",
        "SOCKS 223.254.141.102:6635",
        "SOCKS 110.235.252.74:1080",
        "SOCKS 8.211.194.78:81",
        "SOCKS 176.12.65.24:443",
        "SOCKS 91.90.121.44:9050",
        "SOCKS 152.32.203.130:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}