function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 204.93.169.232:60755",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 104.248.59.38:80",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 47.84.131.156:8100",
        "SOCKS 78.12.249.123:8026",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 13.229.47.109:80",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 122.185.198.242:7999",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 193.56.255.179:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}