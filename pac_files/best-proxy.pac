function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.158.27:25100",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 47.237.130.77:1011",
        "SOCKS 190.15.211.43:8080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 103.163.244.108:83",
        "SOCKS 8.215.3.250:8008",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 202.74.243.43:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 103.156.16.191:8288",
        "SOCKS 103.154.118.245:8080",
        "SOCKS 95.216.214.204:8888",
        "SOCKS 202.5.59.97:6969",
        "SOCKS 143.208.57.58:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}