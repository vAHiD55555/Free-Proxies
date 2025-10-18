function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:54238",
        "SOCKS 89.58.45.94:49044",
        "SOCKS 65.108.251.40:32100",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 185.93.89.143:10521",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 47.237.26.11:1111",
        "SOCKS 115.127.112.178:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 171.228.136.41:2001",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 185.93.89.157:7823",
        "SOCKS 103.245.96.124:6969",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 89.58.45.94:38919",
        "SOCKS 185.93.89.179:7074",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}