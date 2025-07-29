function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.75.211.222:4145",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 209.121.164.51:31147",
        "SOCKS 178.33.77.209:10880",
        "SOCKS 47.236.37.129:18081",
        "SOCKS 78.109.201.55:81",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 117.74.65.207:443",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 212.110.188.189:34405",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 89.58.45.94:43476",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}