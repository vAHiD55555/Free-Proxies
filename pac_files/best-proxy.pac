function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 129.153.194.16:1080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 152.32.219.123:10808",
        "SOCKS 128.0.26.27:1080",
        "SOCKS 72.205.0.93:4145",
        "SOCKS 104.154.186.48:80",
        "SOCKS 171.253.95.3:2102",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 45.77.37.39:2030",
        "SOCKS 13.140.164.179:3104",
        "SOCKS 27.124.43.203:1080",
        "SOCKS 145.255.239.78:1080",
        "SOCKS 103.118.85.144:1080",
        "SOCKS 13.140.164.179:3067",
        "SOCKS 110.49.66.210:8080",
        "SOCKS 194.67.111.148:1080",
        "SOCKS 144.22.165.206:1088",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 8.219.97.248:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}