function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 34.203.202.172:8080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 120.77.203.0:443",
        "SOCKS 130.131.155.173:80",
        "SOCKS 3.24.178.81:80",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 103.195.65.254:8080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 144.124.227.90:10808",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 147.75.34.105:443",
        "SOCKS 159.8.114.37:80",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 47.245.117.43:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}