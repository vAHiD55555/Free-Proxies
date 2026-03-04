function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.8.225.226:4444",
        "SOCKS 206.123.156.254:5002",
        "SOCKS 138.124.53.25:7443",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 103.104.99.89:80",
        "SOCKS 45.83.182.12:1080",
        "SOCKS 13.229.107.106:80",
        "SOCKS 82.145.209.242:80",
        "SOCKS 74.48.78.224:2080",
        "SOCKS 103.113.70.189:1081",
        "SOCKS 206.123.156.184:5450",
        "SOCKS 206.123.156.228:5000",
        "SOCKS 18.163.223.91:6000",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 58.19.55.17:15208",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 206.123.156.190:8421",
        "SOCKS 206.123.156.213:8088",
        "SOCKS 95.80.103.216:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}