function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.94:17385",
        "SOCKS 141.94.195.25:22558",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 91.185.45.92:1080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 67.43.236.19:21023",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 67.43.228.251:31903",
        "SOCKS 167.234.224.70:5060",
        "SOCKS 217.25.90.44:5050",
        "SOCKS 121.165.169.220:8728",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 152.53.36.101:26685",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}