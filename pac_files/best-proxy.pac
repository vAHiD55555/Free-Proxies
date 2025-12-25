function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.33.248.45:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 128.140.76.145:30429",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 8.212.157.10:8080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 157.90.213.139:8888",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 175.110.115.54:11536",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 34.96.238.40:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}