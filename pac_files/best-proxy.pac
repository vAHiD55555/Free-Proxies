function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.76:4145",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 202.58.77.194:8031",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 207.246.234.115:4669",
        "SOCKS 27.79.192.89:16000",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 173.209.63.68:8037",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 3.107.252.199:8099",
        "SOCKS 195.93.173.58:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}