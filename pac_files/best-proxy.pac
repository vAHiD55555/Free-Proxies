function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.109.57.42:3629",
        "SOCKS 103.82.23.118:6260",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 78.12.220.164:1002",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 155.94.163.199:1080",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 113.160.188.21:1080",
        "SOCKS 124.105.180.29:8082",
        "SOCKS 152.53.171.242:28859",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 152.53.36.101:47985",
        "SOCKS 179.96.28.58:80",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 152.53.171.242:40639",
        "SOCKS 157.180.121.252:52634",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 51.15.196.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}