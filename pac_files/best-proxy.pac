function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.113.155.120:41154",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 80.75.213.22:3128",
        "SOCKS 91.231.182.147:8080",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 123.18.234.145:8080",
        "SOCKS 27.71.228.47:3128",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 191.101.190.207:8080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 85.132.37.9:1313",
        "SOCKS 38.7.131.190:999",
        "SOCKS 103.81.194.120:8080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 3.107.252.199:8099",
        "SOCKS 114.80.40.128:3081",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 188.165.233.121:9151",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}