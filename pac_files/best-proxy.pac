function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.91:9959",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 67.201.35.145:4145",
        "SOCKS 203.175.127.240:8080",
        "SOCKS 177.229.218.54:999",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 78.187.42.187:3310",
        "SOCKS 193.239.103.13:34415",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 43.135.136.131:59394",
        "SOCKS 72.10.160.90:32103",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 103.28.121.58:80",
        "SOCKS 46.10.208.106:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}