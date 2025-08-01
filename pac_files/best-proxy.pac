function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.59.117.2:8080",
        "SOCKS 212.110.188.198:34405",
        "SOCKS 67.43.228.254:6535",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 8.219.97.248:80",
        "SOCKS 51.158.105.157:16379",
        "SOCKS 1.54.145.15:16000",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 171.249.163.170:1452",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 207.246.234.115:4669",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 202.137.14.57:8085",
        "SOCKS 121.205.215.44:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}