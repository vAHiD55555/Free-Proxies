function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 111.165.8.141:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 35.180.188.216:80",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 16.78.219.183:1964",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 18.193.250.255:3128",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 178.130.47.129:1082",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 49.236.212.134:8888",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 8.215.43.202:7777",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}