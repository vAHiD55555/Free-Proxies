function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.36.190:1088",
        "SOCKS 45.140.147.155:1081",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 123.54.197.19:21826",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 200.174.198.32:8888",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 120.77.203.0:443",
        "SOCKS 13.229.107.106:80",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 156.225.31.27:7890",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 1.180.49.222:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}