function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.240.207:16379",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 71.168.71.12:8890",
        "SOCKS 37.187.109.70:10111",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 171.238.89.141:1092",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 120.77.203.0:443",
        "SOCKS 128.140.76.145:10017",
        "SOCKS 47.251.73.54:808",
        "SOCKS 177.234.194.31:999",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 175.106.15.189:8080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 103.178.2.16:8199",
        "SOCKS 185.236.202.170:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}