function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 172.99.189.39:15604",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 120.77.203.0:443",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 46.43.72.25:8080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 117.74.65.207:80",
        "SOCKS 16.78.104.244:9078",
        "SOCKS 91.185.58.178:1080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 43.205.124.165:8405",
        "SOCKS 222.129.35.9:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}