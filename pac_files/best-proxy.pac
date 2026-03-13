function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.236.129.64:3128",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 163.5.128.61:14270",
        "SOCKS 139.59.24.173:1080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 206.123.156.217:7606",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 123.54.197.50:22507",
        "SOCKS 113.59.32.142:22222",
        "SOCKS 1.231.81.166:3128",
        "SOCKS 181.78.194.249:999",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 86.53.183.16:1080",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 85.198.98.179:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 88.216.98.251:53983",
        "SOCKS 174.138.62.182:43715",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}