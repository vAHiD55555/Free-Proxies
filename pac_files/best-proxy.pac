function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.144.196.192:39105",
        "SOCKS 152.32.203.130:10808",
        "SOCKS 165.99.14.18:1111",
        "SOCKS 62.109.1.115:1080",
        "SOCKS 88.201.248.85:1080",
        "SOCKS 104.207.139.62:1080",
        "SOCKS 59.38.113.185:20000",
        "SOCKS 216.106.179.216:49304",
        "SOCKS 109.172.7.42:1080",
        "SOCKS 43.106.60.21:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 130.17.13.182:8888",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 85.122.120.119:30016",
        "SOCKS 62.133.62.27:1082",
        "SOCKS 132.226.7.23:30277",
        "SOCKS 216.106.179.216:49288",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}