function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.219.236.127:1080",
        "SOCKS 141.98.197.133:18791",
        "SOCKS 217.217.254.94:80",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 61.216.156.222:60808",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 152.53.171.242:27821",
        "SOCKS 177.47.172.82:3128",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 152.53.171.242:21266",
        "SOCKS 5.182.209.247:29881",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 180.103.250.177:1080",
        "SOCKS 119.81.71.27:80",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 47.74.46.81:9080",
        "SOCKS 202.62.37.36:1080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 167.172.109.12:39452",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}