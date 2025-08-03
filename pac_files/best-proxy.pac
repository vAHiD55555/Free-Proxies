function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.37.77:57114",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 185.93.89.145:4002",
        "SOCKS 103.18.77.14:1111",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 40.192.69.15:3128",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 77.83.246.56:3128",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 47.89.159.212:13",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 40.192.69.166:3128",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 45.142.193.26:49031",
        "SOCKS 208.113.155.120:41154",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}