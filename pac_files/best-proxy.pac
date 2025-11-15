function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.210.4.18:7779",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 148.135.97.2:3128",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 160.25.8.148:11011",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 38.60.162.252:1011",
        "SOCKS 47.245.81.38:1011",
        "SOCKS 103.82.23.118:5178",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 155.94.163.199:1080",
        "SOCKS 89.58.45.94:16951",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 89.58.45.94:36669",
        "SOCKS 188.166.197.129:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}