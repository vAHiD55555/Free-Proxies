function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.114.78:5556",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 109.205.63.178:53672",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 123.54.197.16:21710",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 176.126.86.190:1080",
        "SOCKS 67.43.236.20:3465",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 116.107.104.129:10001",
        "SOCKS 206.27.173.58:80",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 139.59.24.173:1080",
        "SOCKS 51.158.105.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}