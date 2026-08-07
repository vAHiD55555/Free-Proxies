function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.65.140.216:1082",
        "SOCKS 8.213.197.208:1080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 82.9.133.51:9150",
        "SOCKS 103.197.241.209:1080",
        "SOCKS 89.163.135.20:8236",
        "SOCKS 65.109.65.239:28080",
        "SOCKS 150.136.58.221:1080",
        "SOCKS 13.140.164.179:3539",
        "SOCKS 47.237.92.86:115",
        "SOCKS 45.91.55.95:443",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 104.161.23.122:5089",
        "SOCKS 47.251.87.199:2002",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 194.177.28.66:10808",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 72.195.34.42:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}