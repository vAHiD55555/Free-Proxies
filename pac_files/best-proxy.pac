function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 147.75.34.74:10019",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 212.110.188.207:34405",
        "SOCKS 135.181.203.208:80",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 183.81.48.184:16000",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 31.128.41.253:18080",
        "SOCKS 171.7.3.71:8080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 116.96.82.102:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}