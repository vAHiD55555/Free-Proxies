function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.194.217.97:1080",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 38.194.246.34:999",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 146.235.19.84:10809",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 36.255.98.163:5014",
        "SOCKS 62.60.131.191:9001",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 88.99.27.163:5093",
        "SOCKS 169.57.157.148:80",
        "SOCKS 119.81.189.194:80",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 163.5.128.178:14270",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}