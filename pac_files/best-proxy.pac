function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.1.104.177:7302",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 176.65.132.67:3128",
        "SOCKS 5.63.50.53:3128",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 85.159.230.88:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 8.210.76.40:1122",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 183.166.132.124:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}