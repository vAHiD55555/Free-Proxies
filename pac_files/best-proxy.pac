function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.224.234.71:7300",
        "SOCKS 3.137.32.100:80",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 54.173.77.49:8080",
        "SOCKS 185.125.23.109:8899",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 120.77.203.0:443",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 114.142.181.76:8080",
        "SOCKS 159.89.113.155:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}