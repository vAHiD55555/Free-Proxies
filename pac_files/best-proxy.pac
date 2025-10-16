function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.128.33.60:53405",
        "SOCKS 13.115.193.75:1210",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 222.59.173.105:45118",
        "SOCKS 185.93.89.180:7890",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 185.93.89.179:4303",
        "SOCKS 94.143.137.77:3128",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 185.93.89.147:23793",
        "SOCKS 185.93.89.144:4373",
        "SOCKS 185.93.89.188:4319",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 185.93.89.158:10104",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}