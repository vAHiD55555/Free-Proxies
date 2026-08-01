function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 146.56.158.84:22222",
        "SOCKS 144.31.222.106:7890",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 154.223.77.54:10002",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 152.70.253.226:1080",
        "SOCKS 106.54.229.77:1111",
        "SOCKS 202.58.77.9:8080",
        "SOCKS 103.191.196.71:8199",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 65.109.87.121:28080",
        "SOCKS 147.45.225.141:10808",
        "SOCKS 45.10.70.247:8888",
        "SOCKS 195.66.197.169:39724",
        "SOCKS 36.138.206.172:1080",
        "SOCKS 144.31.104.86:1080",
        "SOCKS 91.226.172.214:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 117.236.124.166:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}