function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.9.34.22:58765",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 195.211.124.250:1080",
        "SOCKS 185.66.88.86:57752",
        "SOCKS 206.123.156.243:4735",
        "SOCKS 37.44.238.2:52611",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 5.199.239.128:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 45.118.146.219:1080",
        "SOCKS 195.114.7.6:1080",
        "SOCKS 103.187.39.17:1080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 170.64.170.204:1080",
        "SOCKS 79.137.197.56:1082",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 104.248.170.104:443",
        "SOCKS 110.235.248.81:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}