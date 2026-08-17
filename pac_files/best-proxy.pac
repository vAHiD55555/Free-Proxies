function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.236.124.166:3128",
        "SOCKS 116.97.240.124:1543",
        "SOCKS 195.19.50.114:1080",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 152.228.134.176:48080",
        "SOCKS 120.133.82.62:44122",
        "SOCKS 62.106.66.174:143",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 45.77.37.39:2080",
        "SOCKS 77.90.8.154:9082",
        "SOCKS 72.255.38.180:1080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 147.45.221.115:1082",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 31.76.15.189:1080",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 152.32.168.221:10808",
        "SOCKS 47.237.107.41:20",
        "SOCKS 120.133.82.62:44087",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}