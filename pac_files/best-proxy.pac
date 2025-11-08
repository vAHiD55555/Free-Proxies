function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.134.27.129:8080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 176.117.237.132:1080",
        "SOCKS 47.91.110.148:8443",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 157.180.121.252:31280",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 47.97.86.231:8222",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 157.180.121.252:22395",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}