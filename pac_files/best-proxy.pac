function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.185.2.45:4145",
        "SOCKS 116.103.131.240:1023",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 47.237.92.86:8080",
        "SOCKS 1.54.76.119:16000",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 190.85.141.170:9090",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 8.212.151.166:1081",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 77.238.103.98:8080",
        "SOCKS 117.68.147.8:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}