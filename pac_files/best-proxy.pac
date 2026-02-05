function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.151.88.220:6618",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 94.232.11.178:46449",
        "SOCKS 167.71.226.135:1080",
        "SOCKS 46.146.220.177:1080",
        "SOCKS 45.88.89.65:6666",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 18.141.177.23:80",
        "SOCKS 195.133.77.82:31742",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 5.129.216.47:1081",
        "SOCKS 43.201.114.43:36537",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 144.31.116.48:1234",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}