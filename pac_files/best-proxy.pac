function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.95.233.128:1082",
        "SOCKS 111.119.162.248:10917",
        "SOCKS 45.74.31.30:5131",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 45.74.31.30:4705",
        "SOCKS 180.167.234.224:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 209.182.234.151:40000",
        "SOCKS 37.187.92.9:1031",
        "SOCKS 167.172.79.22:1080",
        "SOCKS 103.118.85.75:1080",
        "SOCKS 103.142.255.32:1080",
        "SOCKS 203.189.135.105:1080",
        "SOCKS 45.74.31.30:6097",
        "SOCKS 35.78.212.217:32053",
        "SOCKS 45.74.31.30:4425",
        "SOCKS 93.87.38.20:1090",
        "SOCKS 154.59.56.78:999",
        "SOCKS 144.24.171.189:555",
        "SOCKS 45.74.31.30:39850",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}