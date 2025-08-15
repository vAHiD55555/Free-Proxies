function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 165.227.174.249:33080",
        "SOCKS 103.171.82.161:1111",
        "SOCKS 103.12.161.222:1080",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 64.69.43.232:1080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 117.74.65.207:80",
        "SOCKS 42.118.0.155:16000",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 85.133.240.75:8080",
        "SOCKS 45.177.16.129:999",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 182.253.38.179:3128",
        "SOCKS 203.162.13.222:6868",
        "SOCKS 85.214.190.195:3128",
        "SOCKS 8.209.255.114:20172",
        "SOCKS 212.113.112.84:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}