function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.65.117.38:7302",
        "SOCKS 51.158.125.47:16379",
        "SOCKS 160.153.172.248:80",
        "SOCKS 135.181.203.208:80",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 107.172.96.11:24283",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 49.49.93.129:8888",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 1.54.111.112:16000",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 91.238.105.64:2024",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}