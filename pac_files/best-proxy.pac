function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.133.214:16379",
        "SOCKS 171.238.102.99:1092",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 138.68.179.140:3128",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 169.57.157.148:80",
        "SOCKS 72.205.0.93:4145",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 8.219.59.81:1011",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 104.37.175.200:22292",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}