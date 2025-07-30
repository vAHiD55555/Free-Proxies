function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 196.204.83.232:1976",
        "SOCKS 179.96.28.58:80",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 82.223.165.28:62284",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 42.118.1.93:16000",
        "SOCKS 212.110.188.213:34411",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 117.74.65.207:443",
        "SOCKS 42.119.98.195:16000",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 102.209.56.21:80",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 59.29.182.162:8888",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 91.107.185.149:1080",
        "SOCKS 165.227.174.249:33080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}