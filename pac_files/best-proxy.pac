function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.95.39.104:59999",
        "SOCKS 95.217.3.156:9050",
        "SOCKS 206.123.156.247:8409",
        "SOCKS 103.7.138.17:1080",
        "SOCKS 77.223.132.12:10001",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 160.22.200.60:69",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 102.69.146.59:7080",
        "SOCKS 206.123.156.232:8495",
        "SOCKS 172.232.152.127:9050",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 206.123.156.247:8181",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 194.87.79.243:2333",
        "SOCKS 156.225.20.83:1080",
        "SOCKS 43.203.195.46:80",
        "SOCKS 103.9.185.33:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}