function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.227.224.110:9051",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 185.118.51.230:3128",
        "SOCKS 72.10.160.93:7741",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 103.245.204.90:1120",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 128.140.76.145:19752",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}