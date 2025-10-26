function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.171:23173",
        "SOCKS 78.47.219.204:3128",
        "SOCKS 103.72.89.33:8097",
        "SOCKS 31.210.50.6:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 38.194.246.34:999",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 185.93.89.180:5209",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 15.160.186.74:521",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 135.181.203.208:80",
        "SOCKS 34.16.129.212:3128",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 185.93.89.181:10007",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}