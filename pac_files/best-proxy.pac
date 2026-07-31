function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.249.20.169:9060",
        "SOCKS 49.0.0.175:1080",
        "SOCKS 13.140.164.179:3703",
        "SOCKS 134.209.98.206:1080",
        "SOCKS 89.44.86.33:10800",
        "SOCKS 149.18.81.114:7890",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 8.211.170.91:14680",
        "SOCKS 89.191.229.141:1080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 59.38.113.185:20000",
        "SOCKS 47.75.116.41:10800",
        "SOCKS 86.122.222.35:8118",
        "SOCKS 220.158.234.84:1080",
        "SOCKS 131.153.163.222:50258",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 122.144.11.121:1080",
        "SOCKS 45.144.30.59:808",
        "SOCKS 91.226.172.214:1080",
        "SOCKS 110.235.248.81:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}