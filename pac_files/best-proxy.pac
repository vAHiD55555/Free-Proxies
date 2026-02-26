function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 68.183.90.210:59166",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 159.65.230.91:20489",
        "SOCKS 47.252.18.37:808",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 159.65.230.91:20777",
        "SOCKS 178.156.238.178:3128",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 159.65.230.91:20587",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 159.65.230.91:20836",
        "SOCKS 159.65.230.91:20234",
        "SOCKS 159.65.230.91:20168",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 44.219.16.212:80",
        "SOCKS 159.65.230.91:20384",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}