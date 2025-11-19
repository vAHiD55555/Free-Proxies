function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.180.150.87:2025",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 183.232.157.102:1145",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 103.189.63.149:53053",
        "SOCKS 89.58.45.94:25551",
        "SOCKS 89.58.45.94:10385",
        "SOCKS 89.58.45.94:10039",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 89.58.45.94:10057",
        "SOCKS 152.53.171.242:22651",
        "SOCKS 152.53.171.242:53635",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 72.10.160.173:1157",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 89.58.45.94:34479",
        "SOCKS 103.171.83.25:10810",
        "SOCKS 37.192.133.82:1080",
        "SOCKS 152.53.171.242:10519",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}