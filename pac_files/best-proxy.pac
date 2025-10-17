function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.185.2.45:4145",
        "SOCKS 185.93.89.147:11775",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 185.93.89.158:9091",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 185.93.89.182:8168",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 180.149.232.153:61245",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 185.93.89.181:12000",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 185.93.89.158:9443",
        "SOCKS 185.93.89.158:8141",
        "SOCKS 54.90.159.174:9501",
        "SOCKS 170.233.30.33:4153",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}