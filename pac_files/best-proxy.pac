function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 161.35.31.237:1080",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 120.77.203.0:443",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 43.209.130.76:43249",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 157.180.121.252:41541",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 8.212.168.170:9080",
        "SOCKS 46.10.208.106:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}