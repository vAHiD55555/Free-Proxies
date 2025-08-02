function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.27.11.248:8561",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 141.94.195.25:25043",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 212.110.188.189:34405",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 186.207.148.71:8787",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 116.98.187.180:1011",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 51.15.236.150:16379",
        "SOCKS 201.150.116.3:999",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 152.53.194.46:8029",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 144.76.159.121:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}