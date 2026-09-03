function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.62.55.95:1080",
        "SOCKS 174.138.165.214:8765",
        "SOCKS 47.85.37.60:1080",
        "SOCKS 103.75.118.84:1080",
        "SOCKS 46.17.43.219:7890",
        "SOCKS 31.59.170.18:1080",
        "SOCKS 79.137.78.31:3128",
        "SOCKS 113.249.111.67:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 174.138.165.214:50865",
        "SOCKS 130.255.94.32:5080",
        "SOCKS 103.236.190.197:1080",
        "SOCKS 132.243.19.168:1080",
        "SOCKS 203.189.150.44:1080",
        "SOCKS 65.21.252.66:10808",
        "SOCKS 103.162.30.156:3452",
        "SOCKS 88.218.206.170:22",
        "SOCKS 174.138.162.37:32513",
        "SOCKS 194.163.174.78:1085",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}