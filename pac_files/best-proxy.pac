function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.248.168.90:1080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 115.127.182.10:2589",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 141.98.188.201:2080",
        "SOCKS 110.235.247.105:1080",
        "SOCKS 4.216.195.194:3128",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 83.220.169.199:1080",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 125.87.82.86:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}