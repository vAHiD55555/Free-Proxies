function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 146.103.99.6:6588",
        "SOCKS 212.110.188.195:34411",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 89.46.249.252:8765",
        "SOCKS 18.179.46.106:999",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 212.110.188.222:34411",
        "SOCKS 70.36.109.21:60009",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 8.210.117.141:8888",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 8.208.94.223:3128",
        "SOCKS 77.110.114.19:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}