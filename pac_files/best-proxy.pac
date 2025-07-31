function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.83.112.163:8888",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 192.177.139.148:8000",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 5.188.183.253:8080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 116.108.248.137:4001",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 102.209.148.11:8080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 212.110.188.220:34409",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 152.53.194.55:21609",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}