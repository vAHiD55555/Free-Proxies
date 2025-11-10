function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 40.192.100.189:8141",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 5.129.199.124:8888",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 152.53.171.242:38121",
        "SOCKS 152.53.36.101:15201",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 47.243.201.253:1011",
        "SOCKS 179.96.28.58:80",
        "SOCKS 37.221.193.221:26065",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 37.221.193.221:27215",
        "SOCKS 190.97.232.248:999",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 181.214.39.51:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}