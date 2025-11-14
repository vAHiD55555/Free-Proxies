function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.74.192.44:24822",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 47.84.70.29:8888",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 163.223.230.92:59089",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 89.58.45.94:36393",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 222.59.173.105:44124",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}