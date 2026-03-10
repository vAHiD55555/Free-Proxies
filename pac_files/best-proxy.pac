function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.196.216.10:50161",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 202.47.188.191:8080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 123.54.197.53:20690",
        "SOCKS 14.56.107.244:3128",
        "SOCKS 200.174.198.32:8888",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 43.153.28.68:3128",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 172.86.126.35:443",
        "SOCKS 213.202.225.11:1080",
        "SOCKS 43.217.159.83:9080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 194.29.60.220:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}