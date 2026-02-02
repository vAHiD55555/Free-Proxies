function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.229.47.109:80",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 169.57.157.148:80",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 147.75.34.105:443",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 13.229.107.106:80",
        "SOCKS 36.255.98.167:4147",
        "SOCKS 43.131.9.114:1777",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}