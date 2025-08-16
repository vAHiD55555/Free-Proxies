function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.210.76.175:8561",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 103.17.246.60:1080",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 42.193.101.38:1080",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 27.79.128.111:16000",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 45.166.93.113:999",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 72.10.160.174:21931",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}