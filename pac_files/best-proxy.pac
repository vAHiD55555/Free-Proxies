function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.10.42.68:1080",
        "SOCKS 192.73.242.77:9050",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 77.111.110.248:3128",
        "SOCKS 216.22.13.244:1084",
        "SOCKS 91.107.122.209:1080",
        "SOCKS 216.106.179.216:49366",
        "SOCKS 161.35.90.93:1083",
        "SOCKS 43.99.100.108:3128",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 192.9.171.168:1080",
        "SOCKS 13.38.217.179:29788",
        "SOCKS 202.95.15.6:1080",
        "SOCKS 38.175.197.50:5555",
        "SOCKS 193.233.86.198:1080",
        "SOCKS 31.76.15.189:1080",
        "SOCKS 188.143.129.133:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 89.223.121.59:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}