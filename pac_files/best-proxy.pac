function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.113.222.205:57226",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 190.93.102.136:999",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 27.79.192.89:16000",
        "SOCKS 43.224.8.116:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}