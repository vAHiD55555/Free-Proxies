function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.56.89.191:1081",
        "SOCKS 117.161.170.163:9009",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 123.21.22.111:1010",
        "SOCKS 27.79.171.61:16000",
        "SOCKS 45.146.130.43:4424",
        "SOCKS 212.110.188.216:34405",
        "SOCKS 118.34.4.196:80",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 65.38.213.154:8881",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}