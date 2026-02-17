function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.19:23058",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 37.187.92.9:1030",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 123.54.197.18:20421",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 123.54.197.24:20627",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 37.220.83.112:1080",
        "SOCKS 123.54.197.51:20123",
        "SOCKS 194.163.182.6:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}