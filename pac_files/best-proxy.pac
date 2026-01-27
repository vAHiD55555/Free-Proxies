function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.133:1020",
        "SOCKS 62.60.131.203:4189",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 5.199.166.243:9114",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 72.214.108.67:4145",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 62.60.131.205:4091",
        "SOCKS 62.60.131.253:7649",
        "SOCKS 62.60.131.205:4369",
        "SOCKS 62.60.131.205:4859",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 36.255.98.182:10030",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 31.133.32.102:3128",
        "SOCKS 165.227.104.122:48500",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}