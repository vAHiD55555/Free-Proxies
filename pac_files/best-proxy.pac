function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.6.9.176:8072",
        "SOCKS 213.35.110.67:10808",
        "SOCKS 196.216.132.43:8080",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 164.163.40.1:10000",
        "SOCKS 115.127.176.210:2589",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 203.189.154.200:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 62.60.131.193:44742",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 36.255.98.160:11041",
        "SOCKS 27.147.130.98:9108",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 212.34.144.253:80",
        "SOCKS 36.255.98.180:17976",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}