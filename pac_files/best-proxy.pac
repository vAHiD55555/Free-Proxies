function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.131:1020",
        "SOCKS 62.60.131.204:5091",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 62.60.131.253:4201",
        "SOCKS 36.255.98.161:13570",
        "SOCKS 158.160.215.167:8123",
        "SOCKS 62.60.131.204:4795",
        "SOCKS 43.198.18.0:3128",
        "SOCKS 36.255.98.184:15654",
        "SOCKS 78.12.230.52:10025",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 36.255.98.161:4359",
        "SOCKS 62.60.131.253:5489",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 31.133.32.102:3128",
        "SOCKS 62.60.131.204:5498",
        "SOCKS 124.248.177.43:1080",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 175.24.2.65:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}