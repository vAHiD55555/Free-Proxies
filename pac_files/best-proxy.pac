function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:7015",
        "SOCKS 159.89.239.166:18084",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 40.192.70.88:3128",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 103.148.62.1:8080",
        "SOCKS 157.15.66.105:8080",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 196.204.83.232:1981",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 209.14.118.116:999",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 92.58.181.171:7575",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}