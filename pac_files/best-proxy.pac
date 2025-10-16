function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.137:1020",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 185.93.89.182:8416",
        "SOCKS 67.43.228.251:9105",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 185.93.89.157:9030",
        "SOCKS 185.93.89.187:8699",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 168.138.15.93:1080",
        "SOCKS 89.109.179.51:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 95.47.239.65:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}