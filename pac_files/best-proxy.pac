function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.115:57114",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 66.36.234.130:1339",
        "SOCKS 47.91.89.3:9080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 103.82.22.129:10001",
        "SOCKS 152.53.194.46:8065",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 8.219.229.53:1081",
        "SOCKS 117.74.65.207:443",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 51.79.99.237:4502",
        "SOCKS 153.127.195.58:4444",
        "SOCKS 173.209.63.68:8047",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 98.126.23.24:2846",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}