function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 95.188.79.3:1080",
        "SOCKS 155.94.163.198:1080",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 89.58.45.94:30000",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 42.96.5.57:22892",
        "SOCKS 45.189.252.240:999",
        "SOCKS 72.10.160.172:14047",
        "SOCKS 89.58.45.94:46797",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 45.14.224.247:80",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 209.14.118.114:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}