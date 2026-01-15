function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 179.96.28.58:80",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 103.166.124.249:8199",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 163.47.37.190:1080",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 104.248.151.220:57554",
        "SOCKS 62.60.131.179:4238",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 120.26.104.146:8085",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 62.60.131.189:5005",
        "SOCKS 103.197.241.210:1080",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 124.248.184.144:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}