function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.208.97.82:3129",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 38.194.246.34:999",
        "SOCKS 116.103.133.168:1009",
        "SOCKS 8.218.39.40:10800",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 107.172.96.11:24283",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 49.156.44.117:8080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 188.166.154.164:8118",
        "SOCKS 188.125.169.196:8080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 171.249.163.170:1452",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 20.78.118.91:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}