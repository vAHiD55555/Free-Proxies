function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.182.233.70:7302",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 3.85.42.63:3128",
        "SOCKS 38.183.144.18:1080",
        "SOCKS 103.73.193.134:8080",
        "SOCKS 203.189.135.14:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 8.212.157.10:8080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 200.174.198.32:8888",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 36.255.98.177:9643",
        "SOCKS 68.183.90.210:59166",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}