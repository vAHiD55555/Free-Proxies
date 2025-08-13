function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 128.199.202.122:1080",
        "SOCKS 91.84.99.28:80",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 31.128.41.253:18080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 62.33.53.248:3128",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 190.43.92.100:999",
        "SOCKS 113.172.123.47:1002",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 27.71.132.134:16000",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 222.59.173.105:44162",
        "SOCKS 72.10.164.178:28247",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}