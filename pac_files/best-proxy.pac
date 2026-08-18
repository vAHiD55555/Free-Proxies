function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.46.215.90:1080",
        "SOCKS 116.204.231.88:1080",
        "SOCKS 216.106.179.216:49300",
        "SOCKS 103.103.146.149:7080",
        "SOCKS 156.238.250.51:8080",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 223.99.197.190:11012",
        "SOCKS 31.56.222.140:9080",
        "SOCKS 103.180.123.111:1080",
        "SOCKS 85.193.65.88:8888",
        "SOCKS 8.221.126.184:80",
        "SOCKS 216.106.179.216:49453",
        "SOCKS 185.248.179.99:8080",
        "SOCKS 103.164.229.153:8080",
        "SOCKS 109.172.55.177:1082",
        "SOCKS 46.146.220.247:1080",
        "SOCKS 61.9.34.22:58765",
        "SOCKS 194.163.174.78:1084",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 5.128.122.173:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}