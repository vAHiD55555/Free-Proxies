function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.182.233.70:7302",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 43.167.204.113:6006",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 43.167.205.160:6006",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 115.127.112.34:1080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 43.167.254.34:6006",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 62.60.131.193:4173",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 43.167.254.69:6006",
        "SOCKS 125.141.133.98:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}