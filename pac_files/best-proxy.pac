function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 180.183.97.16:8080",
        "SOCKS 47.250.11.111:9080",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 138.2.72.115:1090",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 141.0.8.95:80",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 141.0.9.176:80",
        "SOCKS 141.0.11.243:80",
        "SOCKS 206.123.156.233:29731",
        "SOCKS 206.123.156.253:4145",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 103.236.64.247:8888",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 185.26.180.180:80",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 213.165.58.7:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}