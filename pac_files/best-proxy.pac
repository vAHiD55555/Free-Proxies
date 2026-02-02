function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.37.175.200:22292",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 62.60.131.182:5850",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 45.115.112.142:11011",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 49.200.111.178:3128",
        "SOCKS 13.251.130.198:3128",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 36.255.98.154:10381",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 74.103.66.15:80",
        "SOCKS 62.60.131.185:4351",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 193.239.86.247:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}