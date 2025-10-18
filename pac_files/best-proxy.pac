function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.216.224.108:8192",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 91.84.99.28:80",
        "SOCKS 8.217.111.249:1011",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 185.93.89.187:8308",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 179.96.28.58:80",
        "SOCKS 185.93.89.180:9381",
        "SOCKS 51.20.192.194:15311",
        "SOCKS 185.93.89.145:10122",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}