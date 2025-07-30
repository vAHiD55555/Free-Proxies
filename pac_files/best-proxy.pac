function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.13.215.31:8081",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 27.79.179.151:16000",
        "SOCKS 164.90.193.32:3128",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 42.118.1.93:16000",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 128.140.113.110:5153",
        "SOCKS 67.43.236.22:7601",
        "SOCKS 4.196.67.76:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}