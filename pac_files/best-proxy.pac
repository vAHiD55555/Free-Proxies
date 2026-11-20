function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.31.189.39:1080",
        "SOCKS 45.129.74.223:1081",
        "SOCKS 45.74.31.46:5077",
        "SOCKS 103.88.234.239:40016",
        "SOCKS 45.74.31.47:4321",
        "SOCKS 13.127.222.175:1088",
        "SOCKS 45.74.31.42:4638",
        "SOCKS 176.65.132.138:1080",
        "SOCKS 174.138.165.211:9055",
        "SOCKS 89.169.2.163:10808",
        "SOCKS 202.4.115.232:9090",
        "SOCKS 92.42.37.152:587",
        "SOCKS 46.226.165.82:8443",
        "SOCKS 193.164.7.123:10002",
        "SOCKS 8.215.15.163:8080",
        "SOCKS 47.90.167.27:80",
        "SOCKS 3.139.63.63:8000",
        "SOCKS 192.124.181.25:1080",
        "SOCKS 145.220.227.213:1081",
        "SOCKS 69.174.54.50:10000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}