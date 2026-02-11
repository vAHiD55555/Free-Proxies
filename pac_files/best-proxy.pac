function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.62.49.65:1080",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 77.221.141.244:21406",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 90.189.149.244:1080",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 179.96.28.58:80",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 147.75.34.105:443",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 38.194.224.134:1452",
        "SOCKS 123.182.233.70:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}