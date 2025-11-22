function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.145:2005",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 223.27.82.91:1080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 157.66.81.111:1080",
        "SOCKS 56.124.106.170:8561",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 62.68.48.22:8080",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 161.49.116.131:1338",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 173.236.187.104:40355",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}