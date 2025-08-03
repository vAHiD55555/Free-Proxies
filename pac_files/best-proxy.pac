function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.64.122.99:7302",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 113.172.99.147:1009",
        "SOCKS 170.130.202.134:3128",
        "SOCKS 157.66.16.63:8181",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 34.124.190.108:8080",
        "SOCKS 118.34.4.196:80",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 193.181.35.43:8118",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 27.71.136.68:16000",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 197.201.96.123:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}