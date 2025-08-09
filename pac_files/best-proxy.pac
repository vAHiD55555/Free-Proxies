function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.76:4145",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 170.130.202.134:3128",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 117.74.65.207:80",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 23.94.236.141:8080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 147.75.34.105:443",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 27.79.240.194:16000",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 211.22.151.163:60808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}