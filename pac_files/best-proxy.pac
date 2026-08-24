function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.146.230.23:7890",
        "SOCKS 95.211.190.26:9100",
        "SOCKS 120.133.82.62:44103",
        "SOCKS 164.52.216.71:8080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 118.145.141.251:44020",
        "SOCKS 118.145.141.251:44102",
        "SOCKS 45.74.31.30:9327",
        "SOCKS 194.163.174.78:1080",
        "SOCKS 118.145.141.251:44158",
        "SOCKS 103.132.52.54:8080",
        "SOCKS 157.254.191.115:1080",
        "SOCKS 45.74.31.30:8097",
        "SOCKS 45.74.31.30:5917",
        "SOCKS 118.145.141.251:44051",
        "SOCKS 192.73.242.77:9050",
        "SOCKS 118.145.141.251:44074",
        "SOCKS 173.224.219.64:1080",
        "SOCKS 45.74.31.42:6520",
        "SOCKS 8.212.165.164:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}