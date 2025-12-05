function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.133.214:16379",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 34.45.207.111:9080",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 175.208.236.55:8007",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 13.229.47.109:80",
        "SOCKS 194.87.77.22:80",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 193.233.254.10:1080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 103.82.23.118:5178",
        "SOCKS 176.113.73.99:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}