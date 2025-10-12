function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 106.52.187.222:1080",
        "SOCKS 38.54.9.151:1234",
        "SOCKS 103.172.42.179:8080",
        "SOCKS 147.75.34.105:443",
        "SOCKS 136.49.33.252:8888",
        "SOCKS 38.159.229.101:999",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 47.250.13.246:1011",
        "SOCKS 77.221.134.220:3128",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 120.89.91.222:8181",
        "SOCKS 168.121.220.68:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}