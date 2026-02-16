function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.223.12:16379",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 43.250.54.139:60000",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 169.57.157.148:80",
        "SOCKS 123.54.197.49:22519",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 46.20.106.102:1080",
        "SOCKS 178.170.43.106:8081",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 167.160.184.231:6005",
        "SOCKS 45.87.43.72:54321",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 13.229.107.106:80",
        "SOCKS 46.183.130.89:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}