function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 190.102.233.100:999",
        "SOCKS 65.108.251.40:50153",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 47.79.95.136:1122",
        "SOCKS 185.61.38.140:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}