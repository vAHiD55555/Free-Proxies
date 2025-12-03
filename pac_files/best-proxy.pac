function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 114.236.93.203:15800",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 85.113.43.181:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 67.205.190.164:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}