function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.163.182.6:1080",
        "SOCKS 45.74.31.30:9964",
        "SOCKS 5.45.119.70:1080",
        "SOCKS 103.210.161.8:1080",
        "SOCKS 45.74.31.30:7584",
        "SOCKS 189.51.168.164:999",
        "SOCKS 174.138.162.35:9460",
        "SOCKS 113.22.24.247:30001",
        "SOCKS 45.74.31.30:33924",
        "SOCKS 45.74.31.42:4380",
        "SOCKS 45.74.31.30:4386",
        "SOCKS 140.238.14.161:8082",
        "SOCKS 8.220.141.8:50",
        "SOCKS 45.74.31.30:42582",
        "SOCKS 45.74.31.30:9785",
        "SOCKS 45.74.31.42:13073",
        "SOCKS 45.74.31.30:4029",
        "SOCKS 45.74.31.30:7550",
        "SOCKS 45.74.31.42:13742",
        "SOCKS 45.74.31.42:13728",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}