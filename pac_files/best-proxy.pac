function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.210.76.175:8561",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 203.76.98.21:45958",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 135.181.203.208:80",
        "SOCKS 179.96.28.58:80",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 154.236.177.102:1977",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}