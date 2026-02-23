function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 35.212.218.202:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 169.57.157.148:80",
        "SOCKS 119.81.71.27:80",
        "SOCKS 160.20.55.235:8080",
        "SOCKS 61.72.221.84:3128",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 185.244.49.248:1080",
        "SOCKS 91.242.229.96:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 14.56.107.84:3128",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 123.54.197.21:21259",
        "SOCKS 85.175.219.236:1080",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 103.54.57.117:50460",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}