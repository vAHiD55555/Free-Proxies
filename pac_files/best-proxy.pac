function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 111.61.73.175:7302",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 152.53.171.242:12553",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 77.37.244.119:8080",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 179.48.11.6:8085",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 45.174.243.20:999",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 152.53.171.242:19013",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}