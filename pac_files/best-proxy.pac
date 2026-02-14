function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.21.201.149:8080",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 115.190.91.223:7897",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 177.247.38.86:999",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 200.59.186.176:999",
        "SOCKS 123.54.197.51:21413",
        "SOCKS 123.54.197.53:22245",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 123.54.197.52:22705",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 125.227.225.157:3389",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}