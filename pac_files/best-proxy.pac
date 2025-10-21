function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.124.132.179:8080",
        "SOCKS 209.14.98.6:8080",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 51.210.4.123:60414",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 185.93.89.165:4029",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 213.184.242.144:1337",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 157.175.42.134:20201",
        "SOCKS 135.181.203.208:80",
        "SOCKS 47.76.184.130:1011",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 8.211.194.85:1081",
        "SOCKS 218.6.105.152:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}