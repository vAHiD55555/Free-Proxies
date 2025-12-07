function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.80.228.97:8080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 54.173.77.49:8080",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 8.218.99.137:1011",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 35.180.127.14:1001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}