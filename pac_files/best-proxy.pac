function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.169.46.116:1090",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 199.127.62.89:1081",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 152.53.36.101:28877",
        "SOCKS 152.53.36.101:32693",
        "SOCKS 40.192.27.104:16825",
        "SOCKS 152.53.36.101:39089",
        "SOCKS 89.58.45.94:40219",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 89.58.45.94:18301",
        "SOCKS 89.58.45.94:16951",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 152.53.36.101:11277",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 140.143.164.213:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}