function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.128.12.74:3128",
        "SOCKS 156.244.39.41:20002",
        "SOCKS 202.58.77.18:8080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 158.160.215.167:8123",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 13.229.47.109:80",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 156.244.39.37:20002",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 34.185.159.217:3128",
        "SOCKS 27.147.137.234:9108",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}