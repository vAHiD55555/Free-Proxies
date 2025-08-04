function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.75.211.222:4145",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 103.156.74.154:1111",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 147.75.34.105:443",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 135.181.203.208:80",
        "SOCKS 116.107.169.233:10001",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 128.199.20.45:8080",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 103.35.111.233:19753",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}