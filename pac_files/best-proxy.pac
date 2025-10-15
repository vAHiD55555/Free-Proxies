function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.227.225.157:3389",
        "SOCKS 185.93.89.145:8187",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 185.93.89.145:8098",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 194.58.57.71:1090",
        "SOCKS 82.209.251.53:45678",
        "SOCKS 212.68.38.172:8080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 51.158.105.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}