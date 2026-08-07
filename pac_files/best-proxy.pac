function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.62.62.113:1080",
        "SOCKS 212.46.245.189:1080",
        "SOCKS 89.251.9.135:1080",
        "SOCKS 45.93.170.251:888",
        "SOCKS 45.95.233.128:1082",
        "SOCKS 103.150.206.77:1080",
        "SOCKS 195.19.50.126:1080",
        "SOCKS 89.169.190.135:1080",
        "SOCKS 66.59.197.62:4000",
        "SOCKS 165.99.102.66:1452",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 199.247.18.115:9050",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 103.197.241.209:1080",
        "SOCKS 185.175.229.58:1080",
        "SOCKS 202.43.165.140:10802",
        "SOCKS 36.147.78.166:80",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 91.107.176.117:9088",
        "SOCKS 159.195.49.27:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}