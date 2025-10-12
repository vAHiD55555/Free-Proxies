function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.37.72.89:80",
        "SOCKS 103.162.54.164:2233",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 45.144.234.129:53681",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 193.227.129.215:52203",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 34.92.88.81:33333",
        "SOCKS 185.93.89.182:4269",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 117.74.65.207:80",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 222.59.173.105:44233",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 174.75.211.222:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}