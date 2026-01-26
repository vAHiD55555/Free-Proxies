function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.116.159:5556",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 146.235.19.84:10810",
        "SOCKS 36.255.98.179:4278",
        "SOCKS 77.41.167.137:1080",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 195.35.113.29:1080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 36.255.98.167:4179",
        "SOCKS 62.60.131.188:4064",
        "SOCKS 36.255.98.160:14270",
        "SOCKS 36.255.98.160:15654",
        "SOCKS 36.255.98.175:12449",
        "SOCKS 88.99.30.237:5062",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 62.60.131.194:4378",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}