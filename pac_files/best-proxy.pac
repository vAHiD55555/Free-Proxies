function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.163.182.6:1080",
        "SOCKS 171.253.95.3:1026",
        "SOCKS 47.242.191.174:1011",
        "SOCKS 116.203.19.71:9081",
        "SOCKS 156.238.250.51:8080",
        "SOCKS 171.253.95.241:1081",
        "SOCKS 47.90.167.27:8443",
        "SOCKS 161.35.90.93:1083",
        "SOCKS 45.95.233.88:1082",
        "SOCKS 47.250.51.110:9098",
        "SOCKS 45.192.110.9:1080",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 45.144.214.8:1081",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 47.82.118.11:1011",
        "SOCKS 185.239.50.122:10808",
        "SOCKS 147.45.66.117:1082",
        "SOCKS 194.190.169.197:3701",
        "SOCKS 146.56.191.98:19422",
        "SOCKS 116.96.32.160:1045",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}