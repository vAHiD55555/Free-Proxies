function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.77.203.0:443",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 143.110.160.230:8888",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 37.59.110.73:80",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 187.94.222.166:3128",
        "SOCKS 124.248.190.47:1080",
        "SOCKS 103.244.107.150:8080",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 62.60.131.203:38513",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 124.248.168.90:1080",
        "SOCKS 222.129.37.77:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}