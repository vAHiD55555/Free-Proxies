function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.120.245.247:12432",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 135.181.203.208:80",
        "SOCKS 5.61.62.24:8118",
        "SOCKS 209.141.57.216:80",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 195.74.86.205:80",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 171.228.166.129:1001",
        "SOCKS 37.187.92.9:1026",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 31.129.253.30:40223",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}