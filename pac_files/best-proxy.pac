function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 80.253.246.238:6618",
        "SOCKS 212.96.201.54:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 90.189.165.238:1080",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 89.46.249.170:12345",
        "SOCKS 47.237.132.36:33333",
        "SOCKS 47.91.95.168:3128",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 157.180.121.252:16541",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 20.78.26.206:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}