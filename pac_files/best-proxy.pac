function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.36.190:1088",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 157.230.220.25:4857",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 104.248.59.38:80",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 185.38.111.1:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}