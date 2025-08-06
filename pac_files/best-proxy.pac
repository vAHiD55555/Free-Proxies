function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.120.61.189:43644",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 149.86.137.246:10820",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 103.81.194.162:8080",
        "SOCKS 103.16.62.138:10888",
        "SOCKS 103.112.53.211:6314",
        "SOCKS 192.177.33.221:8000",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 46.229.66.241:1080",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 222.129.32.173:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}