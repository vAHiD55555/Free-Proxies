function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.216.81.102:1100",
        "SOCKS 157.180.121.252:15341",
        "SOCKS 37.221.193.221:48311",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 147.78.66.83:1080",
        "SOCKS 152.53.36.101:20775",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 138.199.25.13:3905",
        "SOCKS 135.181.203.208:80",
        "SOCKS 104.167.216.93:443",
        "SOCKS 129.213.139.179:8080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 150.242.12.169:80",
        "SOCKS 27.72.100.236:4996",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 114.236.93.203:15800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}