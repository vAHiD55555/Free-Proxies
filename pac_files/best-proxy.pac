function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.222.241.8:42378",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 24.199.107.98:8080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 47.83.218.87:1122",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 138.68.21.132:40467",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 157.180.121.252:14699",
        "SOCKS 78.12.230.52:10916",
        "SOCKS 217.142.227.103:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}