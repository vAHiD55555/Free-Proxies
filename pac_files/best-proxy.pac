function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.132.37.9:1313",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 157.66.16.52:8080",
        "SOCKS 42.115.72.200:2113",
        "SOCKS 14.103.9.129:7890",
        "SOCKS 222.184.48.146:22222",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 168.235.110.63:3128",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 185.61.246.57:1080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 185.112.224.151:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}