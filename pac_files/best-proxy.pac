function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.157:57114",
        "SOCKS 176.9.164.117:60013",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 8.208.97.82:3129",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 67.43.228.252:21045",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}