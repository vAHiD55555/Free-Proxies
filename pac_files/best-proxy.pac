function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.128.33.60:53405",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 154.236.177.103:1977",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 128.140.113.110:5153",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 27.79.235.237:16000",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 67.43.228.250:7015",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}