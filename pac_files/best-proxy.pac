function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.188:57114",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 43.100.61.231:1111",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 147.75.34.105:443",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 212.175.61.31:8080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 27.79.183.250:16000",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 159.89.239.166:18084",
        "SOCKS 103.81.194.17:8080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 135.181.203.208:80",
        "SOCKS 27.79.252.5:1001",
        "SOCKS 51.20.192.194:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}