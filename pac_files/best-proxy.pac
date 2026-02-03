function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.242.89.230:3128",
        "SOCKS 119.81.189.194:80",
        "SOCKS 62.60.131.182:4016",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 179.48.11.6:8085",
        "SOCKS 172.236.162.80:3128",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 45.144.232.249:53129",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 195.250.31.18:80",
        "SOCKS 113.120.61.189:43644",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}