function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.78.26.206:8561",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 45.230.170.30:999",
        "SOCKS 120.53.103.114:10443",
        "SOCKS 89.110.65.39:9999",
        "SOCKS 103.160.12.147:8199",
        "SOCKS 43.153.43.58:31280",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 50.112.100.138:80",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 112.198.138.14:8082",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 5.61.62.24:8118",
        "SOCKS 116.98.190.20:1010",
        "SOCKS 157.66.16.36:5568",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 188.166.104.152:49981",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}