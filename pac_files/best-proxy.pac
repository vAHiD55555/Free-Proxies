function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.109.57.42:3629",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 27.79.184.207:16000",
        "SOCKS 168.245.197.146:80",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 104.244.78.150:5555",
        "SOCKS 47.245.117.43:80",
        "SOCKS 42.119.152.212:16000",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 27.79.158.128:16000",
        "SOCKS 27.79.156.0:16000",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 171.234.184.227:1001",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 40.192.27.104:8080",
        "SOCKS 123.21.7.190:1009",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 124.65.117.38:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}