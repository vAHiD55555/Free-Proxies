function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.196.107:16379",
        "SOCKS 15.206.25.229:80",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 115.127.176.182:2026",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 213.154.2.210:3128",
        "SOCKS 100.27.183.62:8080",
        "SOCKS 47.251.57.165:1080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 128.140.76.145:18199",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 198.244.165.193:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}