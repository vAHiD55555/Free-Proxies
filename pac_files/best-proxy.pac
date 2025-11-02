function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.173:57114",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 45.172.1.4:800",
        "SOCKS 45.14.224.247:80",
        "SOCKS 116.97.164.107:1003",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 40.192.4.174:8000",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 152.53.36.101:20587",
        "SOCKS 72.10.160.172:19021",
        "SOCKS 152.53.36.101:45185",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 125.141.133.98:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}