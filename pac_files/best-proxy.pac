function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 135.181.203.208:80",
        "SOCKS 94.73.239.124:55443",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 49.254.107.184:28766",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 123.21.6.109:1010",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 140.82.22.235:34587",
        "SOCKS 5.190.36.2:3128",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 14.162.194.58:10001",
        "SOCKS 72.10.160.172:28327",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}