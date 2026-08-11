function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 147.45.60.139:1082",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 91.239.6.32:10800",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 160.250.54.5:9000",
        "SOCKS 103.180.123.111:1080",
        "SOCKS 5.104.75.62:12000",
        "SOCKS 83.234.87.145:1080",
        "SOCKS 217.12.209.4:1080",
        "SOCKS 8.219.229.53:10000",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 43.163.122.46:8080",
        "SOCKS 172.105.192.212:9080",
        "SOCKS 103.131.215.221:10800",
        "SOCKS 115.136.121.54:9050",
        "SOCKS 103.206.68.241:1080",
        "SOCKS 8.220.141.8:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}