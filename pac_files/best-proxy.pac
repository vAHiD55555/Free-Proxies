function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 95.47.239.65:3128",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 181.129.97.38:999",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 42.114.178.153:16000",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 107.172.96.11:24283",
        "SOCKS 5.190.36.2:3128",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 212.110.188.216:34405",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 58.187.71.222:16000",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 212.110.188.213:34411",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 154.72.204.78:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}