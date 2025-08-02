function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.208.94.223:3128",
        "SOCKS 62.210.37.74:8012",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 192.241.243.131:9150",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 5.190.36.4:3128",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 135.181.203.208:80",
        "SOCKS 42.113.21.218:16000",
        "SOCKS 160.153.172.248:80",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 212.110.188.193:34409",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 89.58.45.94:43476",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}