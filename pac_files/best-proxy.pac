function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.28.121.58:80",
        "SOCKS 13.229.107.106:80",
        "SOCKS 38.34.179.14:8450",
        "SOCKS 119.81.71.27:80",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 45.136.130.167:8448",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 206.123.156.227:8978",
        "SOCKS 38.145.208.178:8444",
        "SOCKS 38.145.208.223:8450",
        "SOCKS 92.118.10.43:3128",
        "SOCKS 38.145.208.203:8449",
        "SOCKS 203.80.138.81:50000",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 45.136.131.25:8453",
        "SOCKS 38.34.183.222:8453",
        "SOCKS 45.136.130.186:8444",
        "SOCKS 176.74.192.44:24822",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}