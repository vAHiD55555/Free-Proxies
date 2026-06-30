function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.235.107.47:1080",
        "SOCKS 112.28.149.156:8443",
        "SOCKS 92.119.164.84:1082",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 213.27.29.153:51000",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 5.75.168.247:8023",
        "SOCKS 51.210.5.144:1088",
        "SOCKS 200.69.83.205:999",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 193.221.203.192:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 218.52.249.121:1080",
        "SOCKS 167.88.164.6:3129",
        "SOCKS 43.106.60.21:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 165.227.211.170:9050",
        "SOCKS 129.151.128.225:1080",
        "SOCKS 157.90.183.51:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}