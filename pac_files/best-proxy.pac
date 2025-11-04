function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.36.190:1088",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 223.25.109.114:8199",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 195.62.50.68:8080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 91.214.62.121:8053",
        "SOCKS 23.237.210.82:80",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 152.53.36.101:36727",
        "SOCKS 51.38.230.146:80",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 103.166.124.249:8199",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 36.94.149.149:8090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}