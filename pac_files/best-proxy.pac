function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.59.204.87:9080",
        "SOCKS 8.213.222.157:8008",
        "SOCKS 123.54.197.19:20752",
        "SOCKS 91.229.133.171:2080",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 156.244.46.156:20002",
        "SOCKS 156.244.2.102:20002",
        "SOCKS 8.212.165.164:9080",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 38.52.208.49:999",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 193.232.178.37:1080",
        "SOCKS 8.221.138.111:8080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 31.58.158.136:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}