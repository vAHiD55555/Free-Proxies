function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.210.4.18:7779",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 185.93.89.144:6113",
        "SOCKS 185.93.89.145:6337",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 54.90.159.174:9501",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 121.205.215.44:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}