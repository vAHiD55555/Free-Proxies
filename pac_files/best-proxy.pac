function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.142.3.145:3306",
        "SOCKS 110.235.250.77:8080",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 125.128.12.154:3128",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 125.128.12.224:3128",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 90.84.188.97:8000",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 149.62.186.244:1080",
        "SOCKS 14.56.177.44:3128",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 95.216.17.79:3888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}