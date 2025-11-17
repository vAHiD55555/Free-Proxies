function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.197.67:1080",
        "SOCKS 190.12.0.66:8080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 155.94.163.200:1080",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 85.172.55.85:1080",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 8.221.139.222:8080",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 137.184.228.194:40886",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}