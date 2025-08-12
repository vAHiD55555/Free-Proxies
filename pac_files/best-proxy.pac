function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.205.213.141:4216",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 125.163.140.92:3128",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 221.202.27.194:10811",
        "SOCKS 171.237.60.177:10003",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 58.186.175.62:16000",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 58.186.92.84:16000",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 58.186.100.200:16000",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 103.245.96.124:6969",
        "SOCKS 27.79.253.85:16000",
        "SOCKS 222.129.36.92:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}