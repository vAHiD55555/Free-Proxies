function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 168.235.110.63:3128",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 113.45.250.180:443",
        "SOCKS 213.219.215.233:3128",
        "SOCKS 45.151.182.9:3128",
        "SOCKS 72.10.160.174:10265",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 123.54.197.16:20923",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 123.54.197.51:20731",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 80.76.34.133:8080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 43.167.198.73:8443",
        "SOCKS 8.222.151.218:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}