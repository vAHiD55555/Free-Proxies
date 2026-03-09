function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.78.118.91:8561",
        "SOCKS 43.153.28.68:3128",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 179.96.28.58:80",
        "SOCKS 182.253.38.179:3128",
        "SOCKS 43.208.16.199:30756",
        "SOCKS 89.185.85.138:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 45.122.122.71:8080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 103.84.95.54:7890",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 71.168.71.12:8888",
        "SOCKS 47.101.149.27:9010",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 8.210.4.18:7779",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}