function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 164.163.43.102:10000",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 211.230.49.122:3128",
        "SOCKS 43.153.64.222:14465",
        "SOCKS 47.239.10.198:33333",
        "SOCKS 164.163.42.2:10000",
        "SOCKS 120.55.14.155:8899",
        "SOCKS 8.213.197.208:3128",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 67.43.228.251:12125",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 47.239.10.198:1111",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 185.105.90.184:12304",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 176.74.192.44:24822",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}