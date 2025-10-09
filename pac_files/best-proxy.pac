function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 41.174.96.38:32650",
        "SOCKS 46.229.66.241:1080",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 203.190.46.131:8080",
        "SOCKS 185.146.1.35:3128",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 78.12.220.164:9174",
        "SOCKS 157.66.84.24:1983",
        "SOCKS 147.185.221.19:14365",
        "SOCKS 185.93.89.182:4020",
        "SOCKS 8.213.129.15:1337",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 72.10.160.93:30557",
        "SOCKS 20.252.53.196:3128",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 117.74.65.207:80",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 72.10.160.173:24063",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}