function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.240.207:16379",
        "SOCKS 185.93.89.182:4459",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 89.58.45.94:43502",
        "SOCKS 185.93.89.182:8009",
        "SOCKS 65.109.52.109:1080",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 89.58.45.94:28751",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 185.93.89.182:8168",
        "SOCKS 185.93.89.182:8085",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 185.93.89.147:14299",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 185.93.89.187:8128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}