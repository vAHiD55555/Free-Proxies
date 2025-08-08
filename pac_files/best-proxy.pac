function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 34.124.190.108:8080",
        "SOCKS 141.11.37.220:8080",
        "SOCKS 58.186.53.22:16000",
        "SOCKS 94.236.164.167:3333",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 35.238.111.20:3128",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 185.13.230.214:8082",
        "SOCKS 34.101.64.157:3128",
        "SOCKS 1.55.60.47:16000",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 192.252.211.193:4145",
        "SOCKS 117.74.65.207:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}