function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 180.158.222.93:1080",
        "SOCKS 66.59.197.62:3128",
        "SOCKS 208.87.128.239:9150",
        "SOCKS 103.132.152.201:1452",
        "SOCKS 8.221.126.184:80",
        "SOCKS 185.209.29.226:1080",
        "SOCKS 31.77.198.168:9002",
        "SOCKS 45.10.42.68:1080",
        "SOCKS 115.127.112.178:1080",
        "SOCKS 13.140.164.179:3125",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 77.73.14.147:1080",
        "SOCKS 163.47.37.190:1080",
        "SOCKS 47.238.60.156:8081",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 194.163.174.78:1082",
        "SOCKS 109.120.138.241:1080",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 103.58.251.118:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}