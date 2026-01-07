function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.201.39.14:4145",
        "SOCKS 181.143.181.35:8080",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 103.28.121.58:80",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 164.163.40.15:10000",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 36.255.98.177:6655",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 62.60.131.178:5285",
        "SOCKS 39.105.27.30:3128",
        "SOCKS 125.141.139.112:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}