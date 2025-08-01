function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.153.141.90:4216",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 107.172.96.11:24283",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 42.117.243.65:16000",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 113.22.250.100:16000",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 114.80.39.130:3081",
        "SOCKS 42.119.156.140:16000",
        "SOCKS 85.206.93.105:8080",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 27.71.128.132:16000",
        "SOCKS 207.246.234.115:4669",
        "SOCKS 24.249.199.4:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}