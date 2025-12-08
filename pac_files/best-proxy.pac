function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.172.165:8811",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 104.248.59.38:80",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 203.190.117.100:8076",
        "SOCKS 3.232.220.76:80",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 185.200.37.43:8080",
        "SOCKS 18.188.15.200:8888",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 59.153.16.214:1120",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 121.206.205.75:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}