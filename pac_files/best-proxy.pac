function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.25.208.163:1100",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 179.96.28.58:80",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 141.98.188.201:2080",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 62.60.131.197:5678",
        "SOCKS 67.43.228.250:8539",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 103.250.70.14:1120",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 188.166.30.17:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}