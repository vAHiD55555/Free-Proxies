function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 185.93.89.143:10055",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 103.82.27.24:10001",
        "SOCKS 168.138.15.93:1080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 66.201.7.213:3128",
        "SOCKS 152.53.194.55:33681",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 170.233.30.33:4153",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 40.176.96.235:8037",
        "SOCKS 104.238.100.115:45314",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 152.53.36.101:45185",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}