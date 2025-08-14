function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.161.170.163:9192",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 51.159.107.202:8118",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 106.75.71.155:8443",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 190.93.102.136:999",
        "SOCKS 1.10.231.193:8080",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 49.232.59.192:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 113.120.61.189:43644",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}