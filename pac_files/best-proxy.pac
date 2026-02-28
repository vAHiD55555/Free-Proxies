function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 159.65.230.91:20408",
        "SOCKS 159.65.230.91:20332",
        "SOCKS 165.154.162.230:1080",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 213.165.58.7:1080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 188.127.247.144:1080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 125.128.12.74:3128",
        "SOCKS 146.235.19.84:10841",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}