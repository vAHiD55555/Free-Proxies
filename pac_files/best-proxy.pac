function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.68.147.8:3000",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 27.71.228.47:3128",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 212.47.243.66:16379",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 42.114.11.170:16000",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 203.74.125.18:8888",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 117.74.65.207:443",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 183.80.23.19:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}