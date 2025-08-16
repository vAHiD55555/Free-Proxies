function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.89.28.226:12915",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 187.125.52.250:8080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 120.25.189.254:9080",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 173.209.63.68:8047",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 27.71.140.43:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}