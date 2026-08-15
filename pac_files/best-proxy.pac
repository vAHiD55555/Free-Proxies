function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.135.135.65:1080",
        "SOCKS 171.253.95.24:1045",
        "SOCKS 195.46.183.181:1080",
        "SOCKS 119.28.64.217:50161",
        "SOCKS 34.69.61.247:80",
        "SOCKS 150.242.218.137:1080",
        "SOCKS 216.106.179.216:49453",
        "SOCKS 89.208.232.117:1080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 194.67.207.95:19080",
        "SOCKS 171.253.95.24:1033",
        "SOCKS 45.133.210.241:1080",
        "SOCKS 119.148.7.10:22122",
        "SOCKS 192.9.231.220:30001",
        "SOCKS 8.219.97.248:80",
        "SOCKS 103.174.122.98:3128",
        "SOCKS 104.236.171.128:41047",
        "SOCKS 103.119.60.219:1080",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 160.250.54.9:9000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}