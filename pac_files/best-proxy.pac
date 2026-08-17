function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.246.62:1080",
        "SOCKS 45.144.53.63:5000",
        "SOCKS 47.254.36.213:123",
        "SOCKS 152.69.167.87:1080",
        "SOCKS 193.42.115.229:1080",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 138.124.10.104:443",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 195.19.52.187:1080",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 65.108.203.37:18080",
        "SOCKS 65.21.252.66:10808",
        "SOCKS 45.77.37.39:2005",
        "SOCKS 165.16.192.205:1080",
        "SOCKS 88.218.206.170:22",
        "SOCKS 103.143.11.246:9005",
        "SOCKS 94.158.46.228:1080",
        "SOCKS 193.233.218.213:1080",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 8.215.12.103:8447",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}