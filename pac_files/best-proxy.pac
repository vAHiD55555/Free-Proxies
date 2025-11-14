function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.98:5566",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 89.58.45.94:27215",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 89.58.45.94:36203",
        "SOCKS 89.58.45.94:51145",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 143.255.43.206:999",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 157.180.121.252:11597",
        "SOCKS 120.224.234.71:7300",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}