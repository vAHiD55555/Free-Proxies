function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.116.159:5556",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 58.219.243.141:8989",
        "SOCKS 185.93.89.181:5765",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 78.38.100.121:8080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 152.53.36.101:15158",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 45.70.236.194:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}