function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 162.251.108.145:3128",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 128.140.76.145:28920",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 116.203.139.209:3128",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 150.40.181.177:5555",
        "SOCKS 195.178.103.7:80",
        "SOCKS 147.75.34.93:10006",
        "SOCKS 103.230.63.86:1120",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 201.217.28.203:88",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 185.112.224.151:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}