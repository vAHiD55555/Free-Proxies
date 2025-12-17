function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 134.122.21.142:33346",
        "SOCKS 173.208.162.142:40001",
        "SOCKS 181.188.203.104:999",
        "SOCKS 103.132.91.190:1080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 119.214.232.23:1080",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 34.39.246.220:3128",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 128.140.76.145:19404",
        "SOCKS 95.164.51.106:3000",
        "SOCKS 67.43.236.18:25943",
        "SOCKS 183.98.143.134:8080",
        "SOCKS 103.172.42.111:8080",
        "SOCKS 31.145.149.75:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}