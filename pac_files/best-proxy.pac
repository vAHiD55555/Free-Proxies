function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.143.164.213:1080",
        "SOCKS 64.225.70.191:8888",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 135.181.213.184:40027",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 154.236.177.104:1976",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 116.105.102.56:1001",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 45.235.200.32:4000",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 173.209.63.68:8037",
        "SOCKS 67.43.228.254:3333",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}