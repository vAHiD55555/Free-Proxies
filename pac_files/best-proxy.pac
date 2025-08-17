function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.47.243.66:16379",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 45.91.201.100:8081",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 78.46.225.37:19051",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 125.141.133.48:5566",
        "SOCKS 171.228.141.131:10089",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 27.79.192.226:16000",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 202.93.244.66:1111",
        "SOCKS 190.97.236.133:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}