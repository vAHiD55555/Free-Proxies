function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.25.215.182:22222",
        "SOCKS 146.0.77.29:9050",
        "SOCKS 111.119.162.248:10909",
        "SOCKS 171.253.95.24:2102",
        "SOCKS 38.242.156.163:9050",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 66.59.197.63:4000",
        "SOCKS 85.113.43.181:1080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 88.99.82.67:443",
        "SOCKS 151.145.63.243:1080",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 217.60.245.29:4080",
        "SOCKS 85.174.84.22:1080",
        "SOCKS 104.207.139.62:1080",
        "SOCKS 152.32.219.123:10808",
        "SOCKS 144.124.253.249:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}