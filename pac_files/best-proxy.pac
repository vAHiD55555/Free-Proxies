function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.20:6231",
        "SOCKS 103.81.194.163:8080",
        "SOCKS 52.221.222.182:80",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 47.236.37.129:18081",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 8.212.151.166:1081",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 51.159.159.73:80",
        "SOCKS 116.108.46.70:4001",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 27.79.235.237:16000",
        "SOCKS 85.119.120.55:8080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 116.103.133.168:1009",
        "SOCKS 186.180.20.34:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}