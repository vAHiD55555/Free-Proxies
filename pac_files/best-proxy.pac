function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 175.106.15.186:8080",
        "SOCKS 103.133.26.45:8080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 115.114.77.133:9090",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 38.159.62.32:999",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 36.255.98.175:4184",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 120.77.203.0:443",
        "SOCKS 120.92.88.147:7890",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 35.180.188.216:80",
        "SOCKS 3.24.178.81:80",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 62.60.131.197:4100",
        "SOCKS 51.158.68.68:8811",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}