function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.52.249.121:1080",
        "SOCKS 45.144.30.59:808",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 82.114.228.67:1080",
        "SOCKS 65.109.201.146:9081",
        "SOCKS 202.91.41.102:1080",
        "SOCKS 47.250.145.191:80",
        "SOCKS 85.174.84.22:1080",
        "SOCKS 193.221.203.14:1080",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 38.76.215.92:1080",
        "SOCKS 47.82.108.195:1011",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 46.146.210.123:1080",
        "SOCKS 143.47.59.115:9050",
        "SOCKS 5.135.101.239:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}