function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.102.242.52:20016",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 123.54.197.52:20693",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 132.145.93.138:1080",
        "SOCKS 123.54.197.17:20095",
        "SOCKS 123.54.197.20:21739",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 123.54.197.52:20016",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 181.214.39.72:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}