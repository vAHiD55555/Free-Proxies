function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.20:6231",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 135.181.203.208:80",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 178.156.191.112:3128",
        "SOCKS 9.163.137.124:3128",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 67.43.236.22:7601",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 27.79.234.236:16000",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 27.71.129.176:16000",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 171.237.95.210:1009",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 119.92.255.3:3128",
        "SOCKS 1.54.73.149:16000",
        "SOCKS 47.115.42.157:8044",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}