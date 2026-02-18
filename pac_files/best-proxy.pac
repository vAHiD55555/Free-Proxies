function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.113.73.102:3128",
        "SOCKS 103.28.121.58:80",
        "SOCKS 120.77.203.0:443",
        "SOCKS 193.106.150.70:1080",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 104.248.59.38:80",
        "SOCKS 79.122.230.20:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}