function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 78.12.220.164:117",
        "SOCKS 159.195.84.83:443",
        "SOCKS 62.60.131.193:33611",
        "SOCKS 36.255.98.160:7023",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 46.146.204.175:1080",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 36.255.98.165:4274",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 62.60.131.253:4005",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 210.16.160.222:7890",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 35.180.188.216:80",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 62.60.131.253:6984",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}