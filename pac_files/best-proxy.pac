function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.198:5566",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 185.93.89.182:4098",
        "SOCKS 152.53.171.242:18081",
        "SOCKS 185.93.89.183:4174",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 152.53.171.242:26893",
        "SOCKS 51.48.124.225:41",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 185.93.89.183:4318",
        "SOCKS 185.93.89.158:34547",
        "SOCKS 185.93.89.181:16950",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 185.93.89.143:8834",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 123.56.89.191:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}