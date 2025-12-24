function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 70.166.65.160:4145",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 185.210.85.26:56981",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 157.20.244.78:8080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 164.68.110.241:8091",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 8.212.157.10:8080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 135.181.203.208:80",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 203.189.159.120:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}