function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.52:21272",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 83.219.250.8:62920",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 85.208.108.43:2094",
        "SOCKS 38.175.204.116:50161",
        "SOCKS 123.54.197.21:21319",
        "SOCKS 123.54.197.16:23588",
        "SOCKS 13.36.243.194:9899",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 47.251.74.38:8443",
        "SOCKS 192.210.150.44:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 123.54.197.49:23230",
        "SOCKS 123.54.197.21:22880",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}