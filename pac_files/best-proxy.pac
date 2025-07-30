function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.113.155.120:41154",
        "SOCKS 212.110.188.204:34411",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 159.89.239.166:18084",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 113.192.3.230:1452",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 51.158.113.139:16379",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 47.236.37.129:18081",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 18.143.173.102:21681",
        "SOCKS 183.80.23.68:16000",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 64.181.240.152:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}