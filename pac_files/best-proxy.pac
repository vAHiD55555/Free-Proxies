function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.239.86.249:3128",
        "SOCKS 67.43.236.18:10521",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 202.62.62.51:1080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 120.28.194.248:8282",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 138.199.25.13:3905",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 113.100.209.184:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}