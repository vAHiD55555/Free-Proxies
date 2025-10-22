function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.236.187.104:40355",
        "SOCKS 8.219.94.196:1100",
        "SOCKS 176.9.164.117:60018",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 202.130.218.193:1080",
        "SOCKS 47.83.8.254:1111",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 8.210.27.75:1100",
        "SOCKS 8.219.94.196:1122",
        "SOCKS 152.53.36.101:20172",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 114.134.189.45:8080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 160.25.8.162:11011",
        "SOCKS 152.53.36.101:27391",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}