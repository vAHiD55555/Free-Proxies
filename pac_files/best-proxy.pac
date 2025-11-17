function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.196.107:16379",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 119.93.160.58:8082",
        "SOCKS 89.58.45.94:32217",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 135.181.203.208:80",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 54.37.72.89:80",
        "SOCKS 89.58.45.94:30401",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 72.10.160.93:7741",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 89.58.45.94:46797",
        "SOCKS 202.93.247.42:8090",
        "SOCKS 89.58.45.94:49381",
        "SOCKS 89.58.45.94:17006",
        "SOCKS 35.181.173.74:9443",
        "SOCKS 154.72.204.78:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}