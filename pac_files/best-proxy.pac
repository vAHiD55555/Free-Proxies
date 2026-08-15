function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.253.95.3:1045",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 116.203.19.71:9081",
        "SOCKS 217.76.54.168:9052",
        "SOCKS 61.177.181.46:10808",
        "SOCKS 43.252.237.169:1080",
        "SOCKS 47.76.149.237:1011",
        "SOCKS 192.9.241.51:26568",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 47.237.92.86:9091",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 89.223.121.59:1080",
        "SOCKS 140.245.53.190:1088",
        "SOCKS 104.248.151.220:57554",
        "SOCKS 171.253.95.3:1089",
        "SOCKS 45.79.203.254:48388",
        "SOCKS 77.238.237.253:41414",
        "SOCKS 144.124.232.204:1080",
        "SOCKS 208.87.128.239:9150",
        "SOCKS 89.208.106.37:32712",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}