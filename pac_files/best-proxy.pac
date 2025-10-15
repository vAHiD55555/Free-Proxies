function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.205.153.110:51528",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 103.227.24.194:3128",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 160.25.8.131:11011",
        "SOCKS 152.53.36.101:32187",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 103.127.223.126:1080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 45.77.156.171:9091",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}