function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.126.23.24:2846",
        "SOCKS 173.209.63.70:8192",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 49.254.146.127:28919",
        "SOCKS 154.236.177.103:1977",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 8.209.255.114:20172",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 172.104.240.74:9053",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}