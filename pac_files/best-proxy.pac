function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.22.209.157:8888",
        "SOCKS 217.160.224.54:8118",
        "SOCKS 111.4.220.2:808",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 159.100.20.206:27866",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 116.103.132.205:1019",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 8.210.219.52:1111",
        "SOCKS 20.78.118.91:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}