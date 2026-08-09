function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.50.235.130:1080",
        "SOCKS 157.254.32.52:10800",
        "SOCKS 79.76.59.115:1080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 185.135.81.149:9060",
        "SOCKS 72.195.34.41:4145",
        "SOCKS 59.38.113.185:20000",
        "SOCKS 8.209.96.245:4145",
        "SOCKS 109.164.35.23:8888",
        "SOCKS 82.193.116.160:21003",
        "SOCKS 176.192.41.172:4444",
        "SOCKS 34.94.46.8:80",
        "SOCKS 212.113.99.167:10800",
        "SOCKS 18.170.25.193:7451",
        "SOCKS 146.190.238.107:40001",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 46.183.130.89:1080",
        "SOCKS 216.48.180.117:8080",
        "SOCKS 8.215.15.163:11",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}