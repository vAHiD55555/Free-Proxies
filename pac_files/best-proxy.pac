function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.65.127.194:1080",
        "SOCKS 202.62.59.218:1080",
        "SOCKS 202.62.59.216:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 203.189.136.7:1080",
        "SOCKS 103.189.63.149:53053",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 202.58.77.77:1111",
        "SOCKS 194.28.61.21:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 120.77.203.0:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}