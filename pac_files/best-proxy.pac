function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 158.220.101.43:1080",
        "SOCKS 82.193.116.160:21003",
        "SOCKS 200.35.153.56:999",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 45.74.178.43:9121",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 176.35.25.216:1080",
        "SOCKS 13.140.164.179:3692",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 59.152.97.233:1080",
        "SOCKS 185.209.29.226:1080",
        "SOCKS 85.198.91.145:1081",
        "SOCKS 103.96.233.10:1080",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 46.30.41.59:9965",
        "SOCKS 104.234.124.3:1080",
        "SOCKS 138.199.25.13:3903",
        "SOCKS 165.154.7.156:8888",
        "SOCKS 103.239.201.50:58765",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}