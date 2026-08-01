function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 223.254.141.102:6615",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 157.151.196.142:1080",
        "SOCKS 92.101.193.58:1080",
        "SOCKS 77.83.246.110:2000",
        "SOCKS 136.248.65.104:1088",
        "SOCKS 43.173.124.23:8081",
        "SOCKS 144.22.165.206:1088",
        "SOCKS 151.145.63.243:1080",
        "SOCKS 45.159.189.203:1080",
        "SOCKS 94.198.218.123:1080",
        "SOCKS 104.194.146.9:80",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 8.221.138.111:4002",
        "SOCKS 118.70.67.11:1080",
        "SOCKS 46.146.210.123:1080",
        "SOCKS 43.161.253.113:1080",
        "SOCKS 104.161.23.122:5069",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}