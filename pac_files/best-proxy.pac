function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.133.214:16379",
        "SOCKS 193.221.203.121:1080",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 36.255.98.167:10805",
        "SOCKS 62.60.131.203:5083",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 88.216.68.41:9101",
        "SOCKS 62.60.131.193:33611",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 62.60.131.205:4983",
        "SOCKS 62.60.131.203:4189",
        "SOCKS 36.255.98.152:8768",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 36.255.98.163:4083",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 103.28.121.58:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}