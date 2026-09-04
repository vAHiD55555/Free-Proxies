function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.99.75:1080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 91.188.213.143:1080",
        "SOCKS 159.223.76.52:1080",
        "SOCKS 174.138.162.37:30991",
        "SOCKS 45.194.41.228:8080",
        "SOCKS 2.56.178.88:808",
        "SOCKS 174.138.162.35:8865",
        "SOCKS 144.126.197.184:1088",
        "SOCKS 103.231.45.189:1080",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 212.220.113.31:1080",
        "SOCKS 121.101.186.202:3128",
        "SOCKS 61.9.32.142:58765",
        "SOCKS 124.248.177.44:1080",
        "SOCKS 43.135.176.121:1080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 111.119.162.248:10909",
        "SOCKS 70.166.65.160:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}