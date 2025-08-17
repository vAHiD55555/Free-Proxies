function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.27.11.248:8561",
        "SOCKS 27.71.140.43:16000",
        "SOCKS 15.152.35.198:3129",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 27.79.172.227:16000",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 202.137.14.57:8085",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 168.220.89.95:3128",
        "SOCKS 173.209.63.67:8226",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 171.237.116.81:1002",
        "SOCKS 117.74.65.207:443",
        "SOCKS 27.79.200.193:16000",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 98.190.102.40:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}