function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.121.240.114:3256",
        "SOCKS 36.255.98.181:8999",
        "SOCKS 62.60.131.204:4985",
        "SOCKS 62.60.131.191:4510",
        "SOCKS 62.60.131.203:4309",
        "SOCKS 36.255.98.152:14634",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 62.60.131.191:12126",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 36.255.98.165:11011",
        "SOCKS 36.255.98.161:6262",
        "SOCKS 36.255.98.169:6539",
        "SOCKS 62.60.131.253:5031",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}