function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.200.66.166:9051",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 66.201.40.43:8888",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 178.18.244.8:8888",
        "SOCKS 27.79.164.54:16000",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 64.176.6.165:13920",
        "SOCKS 162.212.153.46:8888",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 203.162.13.26:6868",
        "SOCKS 72.10.160.94:29225",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}