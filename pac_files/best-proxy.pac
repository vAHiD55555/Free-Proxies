function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.195.34.42:4145",
        "SOCKS 52.193.148.177:9551",
        "SOCKS 159.69.57.20:8880",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 182.93.85.225:8080",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 27.79.132.13:16000",
        "SOCKS 123.20.57.61:1001",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 173.209.63.67:8226",
        "SOCKS 209.121.164.50:31147",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 8.210.148.99:1122",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 40.192.27.104:8080",
        "SOCKS 8.209.249.89:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}