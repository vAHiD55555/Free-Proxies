function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 95.31.16.116:1081",
        "SOCKS 150.129.115.253:6667",
        "SOCKS 223.254.141.102:6648",
        "SOCKS 45.77.37.39:2055",
        "SOCKS 139.59.59.122:8118",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 45.179.145.12:6080",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 103.153.159.217:80",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 43.156.201.214:2080",
        "SOCKS 91.247.248.116:1088",
        "SOCKS 176.99.182.222:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 112.216.54.226:12121",
        "SOCKS 194.163.174.78:1087",
        "SOCKS 216.126.227.173:32768",
        "SOCKS 47.101.182.85:13443",
        "SOCKS 194.163.174.78:1086",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}