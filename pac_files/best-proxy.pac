function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 192.241.156.17:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 125.128.12.24:3128",
        "SOCKS 202.58.77.77:1111",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 46.105.189.70:1090",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 125.128.12.34:3128",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 185.208.74.38:1080",
        "SOCKS 34.7.88.87:3128",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 115.127.62.50:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}