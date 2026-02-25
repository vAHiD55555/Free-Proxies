function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.227.225.157:3389",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 98.83.99.247:80",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 8.209.96.245:5060",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 51.15.196.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}