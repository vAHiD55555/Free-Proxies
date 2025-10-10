function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.247.240.34:8080",
        "SOCKS 185.105.230.45:3128",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 1.10.141.115:8080",
        "SOCKS 193.95.53.131:8077",
        "SOCKS 188.132.150.198:8080",
        "SOCKS 103.192.158.115:46",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 51.158.70.223:16379",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 177.234.194.31:999",
        "SOCKS 196.204.83.233:1976",
        "SOCKS 72.10.160.92:16287",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 203.74.125.18:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}