function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 23.251.62.210:10080",
        "SOCKS 121.165.161.240:8864",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 171.238.102.99:1068",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 209.97.143.120:3128",
        "SOCKS 171.238.88.111:1069",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 171.238.91.139:1088",
        "SOCKS 171.238.102.99:1040",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 171.238.102.99:1120",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}