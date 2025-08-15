function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.229.78.250:8448",
        "SOCKS 27.71.140.43:16000",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 103.164.229.149:8080",
        "SOCKS 103.155.197.103:8080",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 196.204.83.232:1981",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 45.91.201.100:8081",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 156.200.116.70:1976",
        "SOCKS 117.74.65.207:443",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 128.140.113.110:5153",
        "SOCKS 171.249.163.170:1452",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}