function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.153.141.90:4216",
        "SOCKS 47.83.27.173:1100",
        "SOCKS 120.77.203.0:443",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 8.212.157.10:8080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 89.104.71.36:1080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 138.68.21.132:40467",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 67.43.236.18:25943",
        "SOCKS 128.140.76.145:15387",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 107.174.242.87:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}