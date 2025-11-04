function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.205.213.141:4216",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 119.40.84.86:8010",
        "SOCKS 38.194.224.134:1452",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 18.163.49.218:3030",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 41.32.39.7:3128",
        "SOCKS 119.148.8.54:8443",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 27.72.100.236:4996",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 212.56.47.54:1083",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 144.91.78.34:20269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}