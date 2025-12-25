function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.133.219.4:63434",
        "SOCKS 176.115.150.201:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 110.235.240.135:1080",
        "SOCKS 202.62.59.138:1080",
        "SOCKS 93.187.188.30:1080",
        "SOCKS 45.166.93.113:999",
        "SOCKS 65.108.203.37:18080",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 203.189.136.18:1080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 124.248.190.31:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 152.53.168.53:31241",
        "SOCKS 45.40.136.39:45741",
        "SOCKS 1.180.49.222:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}