function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.115.21.11:1080",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 47.76.123.104:8888",
        "SOCKS 118.70.13.38:41857",
        "SOCKS 8.210.148.229:1011",
        "SOCKS 8.222.214.90:33333",
        "SOCKS 115.127.107.106:1080",
        "SOCKS 139.159.97.42:9798",
        "SOCKS 152.53.36.101:10521",
        "SOCKS 89.46.249.146:8279",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 212.56.47.48:1083",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 163.223.78.161:8181",
        "SOCKS 47.236.164.244:1100",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 222.129.36.92:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}