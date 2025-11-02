function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.120.241:5556",
        "SOCKS 61.9.34.118:58765",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 47.236.147.45:1100",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 91.199.160.95:1081",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 103.148.112.69:8199",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 47.237.3.83:33333",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 152.53.36.101:10145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}