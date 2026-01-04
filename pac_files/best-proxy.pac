function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.10.229.243:7777",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 43.167.185.188:6006",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 31.59.185.74:2525",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 62.60.131.189:4065",
        "SOCKS 62.60.131.185:5678",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 43.167.254.43:6006",
        "SOCKS 47.239.61.82:9001",
        "SOCKS 103.187.39.21:1080",
        "SOCKS 43.167.168.66:6006",
        "SOCKS 103.197.241.210:1080",
        "SOCKS 43.133.21.105:6006",
        "SOCKS 137.184.228.194:40886",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}