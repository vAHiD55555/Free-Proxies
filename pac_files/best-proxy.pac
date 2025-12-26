function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.91.242.198:6688",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 66.211.155.34:8080",
        "SOCKS 110.235.249.88:1080",
        "SOCKS 184.95.220.42:1080",
        "SOCKS 103.141.66.78:1080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 203.189.151.19:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 78.140.46.48:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}