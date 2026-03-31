function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.222.132:3128",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 206.123.156.207:10092",
        "SOCKS 38.34.179.68:8443",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 206.123.156.199:11981",
        "SOCKS 38.34.179.21:8443",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 206.123.156.199:7502",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 206.123.156.185:6429",
        "SOCKS 94.130.16.48:30168",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 38.145.218.217:8443",
        "SOCKS 206.123.156.230:4062",
        "SOCKS 38.34.179.95:8444",
        "SOCKS 206.123.156.190:5028",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}