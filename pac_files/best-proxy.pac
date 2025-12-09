function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.73:5719",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 18.141.177.23:80",
        "SOCKS 103.184.67.115:8080",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 88.99.26.62:3128",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 46.146.220.180:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}