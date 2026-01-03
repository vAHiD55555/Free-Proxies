function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.0.205.4:1080",
        "SOCKS 43.167.244.13:6006",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 36.255.98.160:4145",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 43.133.7.152:6006",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 203.189.137.127:1080",
        "SOCKS 93.184.4.37:1080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 203.189.156.212:1080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 43.133.1.253:6006",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 43.133.3.84:6006",
        "SOCKS 43.167.169.109:6006",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}