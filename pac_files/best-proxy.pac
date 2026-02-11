function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.56.98:19190",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 119.81.71.27:80",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 193.47.60.119:52681",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 104.248.59.38:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}