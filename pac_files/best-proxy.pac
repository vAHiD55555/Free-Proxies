function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.221.193.221:29892",
        "SOCKS 152.53.36.101:27417",
        "SOCKS 152.53.171.242:46107",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 152.53.36.101:35609",
        "SOCKS 89.58.45.94:36393",
        "SOCKS 45.70.236.194:999",
        "SOCKS 152.53.36.101:24619",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 152.53.171.242:15449",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 89.58.45.94:23028",
        "SOCKS 89.58.45.94:36935",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 103.54.57.117:50460",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}