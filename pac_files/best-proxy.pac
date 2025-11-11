function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.115:57114",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 72.10.160.93:21601",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 77.50.104.110:1080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 36.147.78.166:80",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 152.53.36.101:25977",
        "SOCKS 47.236.198.208:1111",
        "SOCKS 152.53.171.242:24649",
        "SOCKS 172.111.146.153:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}