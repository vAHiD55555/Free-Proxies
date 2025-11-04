function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:48239",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 103.160.12.147:8199",
        "SOCKS 47.76.138.222:1011",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 186.215.87.194:30001",
        "SOCKS 67.43.228.251:10673",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 126.209.17.228:8080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 157.180.121.252:15105",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 135.181.203.208:80",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 72.10.160.93:26517",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}