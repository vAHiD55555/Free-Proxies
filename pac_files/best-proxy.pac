function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.65.69.186:9200",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 147.45.60.60:80",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 103.54.57.117:50460",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}