function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 49.49.29.227:8080",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 27.71.140.43:16000",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 179.96.28.58:80",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 171.247.151.218:8080",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 64.69.43.232:1080",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 176.119.16.40:8534",
        "SOCKS 115.77.170.97:10001",
        "SOCKS 67.211.219.122:8888",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 172.104.4.144:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}