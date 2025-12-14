function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.36.190:1088",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 8.222.234.245:1145",
        "SOCKS 72.10.160.90:12297",
        "SOCKS 103.86.131.62:80",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 115.127.180.98:2026",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 103.73.193.134:8080",
        "SOCKS 128.140.76.145:29505",
        "SOCKS 154.205.155.19:8888",
        "SOCKS 128.140.76.145:57007",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 159.65.11.208:8080",
        "SOCKS 15.206.25.229:80",
        "SOCKS 78.140.46.48:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}