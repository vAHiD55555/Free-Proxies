function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.114.199.202:1080",
        "SOCKS 45.32.160.61:1088",
        "SOCKS 195.19.52.187:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 91.197.79.59:1080",
        "SOCKS 163.192.24.33:1080",
        "SOCKS 58.186.168.155:1116",
        "SOCKS 67.207.92.87:1088",
        "SOCKS 5.35.85.97:1080",
        "SOCKS 195.46.183.181:1080",
        "SOCKS 103.138.145.202:1999",
        "SOCKS 88.218.206.170:22",
        "SOCKS 216.105.166.190:1080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 103.109.96.129:2610",
        "SOCKS 170.106.142.217:47783",
        "SOCKS 51.178.49.241:1088",
        "SOCKS 111.119.162.248:10925",
        "SOCKS 5.189.17.23:9050",
        "SOCKS 82.193.116.160:21003",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}