function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.211.130.237:8192",
        "SOCKS 138.199.25.13:3901",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 5.75.235.252:19935",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 72.10.160.172:7987",
        "SOCKS 5.75.235.252:39517",
        "SOCKS 157.180.121.252:13965",
        "SOCKS 202.96.165.47:7890",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 157.180.121.252:22759",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}