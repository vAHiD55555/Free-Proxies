function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.124.227.90:10880",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 8.220.149.222:80",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 45.140.147.82:1081",
        "SOCKS 123.54.197.24:23661",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 67.43.236.20:9735",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 72.10.160.90:32931",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 194.135.17.31:1080",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 123.54.197.19:22111",
        "SOCKS 8.212.153.179:443",
        "SOCKS 120.224.234.71:7300",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}