function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.109.57.42:3629",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 47.81.14.7:3128",
        "SOCKS 36.255.98.177:43937",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 71.168.71.12:8890",
        "SOCKS 103.230.63.65:1120",
        "SOCKS 67.43.228.251:20237",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 110.235.255.191:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}