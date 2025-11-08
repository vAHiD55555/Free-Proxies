function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.169.36.109:1080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 138.117.85.217:999",
        "SOCKS 147.75.68.200:10001",
        "SOCKS 152.53.36.101:13649",
        "SOCKS 157.180.121.252:11995",
        "SOCKS 103.220.23.211:8080",
        "SOCKS 37.221.193.221:25371",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 79.120.9.143:7777",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 157.180.121.252:59415",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 116.106.77.56:30533",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}