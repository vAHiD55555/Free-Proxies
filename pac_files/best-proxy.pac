function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.59.225.188:12827",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 171.238.88.111:1069",
        "SOCKS 91.202.36.46:8083",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 186.96.180.17:999",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 39.170.85.129:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}