function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.186.220.95:16000",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 117.250.3.58:8080",
        "SOCKS 212.110.188.220:34409",
        "SOCKS 72.10.160.92:27821",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 42.118.202.56:16000",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 81.143.236.200:443",
        "SOCKS 34.166.117.165:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 70.36.109.21:60009",
        "SOCKS 212.110.188.211:34409",
        "SOCKS 9.163.137.124:3128",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 188.227.224.110:9051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}