function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.6.235.13:5555",
        "SOCKS 31.57.172.220:10808",
        "SOCKS 140.245.36.86:1080",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 119.28.64.217:50161",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 47.82.78.113:1011",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 45.150.33.211:1082",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 109.172.55.227:1082",
        "SOCKS 103.138.145.102:1999",
        "SOCKS 171.253.92.42:1081",
        "SOCKS 8.211.42.167:544",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 188.235.21.247:2080",
        "SOCKS 62.109.1.115:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}