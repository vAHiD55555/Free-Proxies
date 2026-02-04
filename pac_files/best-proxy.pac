function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:46249",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 2.144.6.212:12111",
        "SOCKS 35.180.188.216:80",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 8.217.189.251:1011",
        "SOCKS 43.224.10.13:6667",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 54.90.159.174:22229",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 72.10.160.171:23085",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}