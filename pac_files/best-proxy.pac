function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.209.249.89:3128",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 27.79.132.246:16000",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 211.109.199.99:80",
        "SOCKS 209.121.164.51:31147",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 27.79.132.241:16000",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 91.84.99.28:80",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 179.96.28.58:80",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 20.41.240.154:3128",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 98.185.94.76:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}