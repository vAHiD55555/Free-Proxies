function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.18.77.14:1111",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 14.225.212.81:3128",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 209.121.164.50:31147",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 13.211.233.22:36619",
        "SOCKS 40.192.67.123:3128",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 40.71.46.210:8214",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}