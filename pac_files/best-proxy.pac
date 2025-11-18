function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.160.66.130:5555",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 103.191.218.119:8199",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 89.58.45.94:38871",
        "SOCKS 157.180.121.252:48385",
        "SOCKS 89.58.45.94:35667",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 212.23.69.121:1080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 57.128.188.167:8187",
        "SOCKS 62.213.13.54:3128",
        "SOCKS 89.58.45.94:37137",
        "SOCKS 89.58.45.94:36909",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}