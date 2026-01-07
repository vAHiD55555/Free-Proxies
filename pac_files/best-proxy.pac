function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.180.140.254:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 159.8.114.37:80",
        "SOCKS 62.60.131.178:4673",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 202.5.37.104:17382",
        "SOCKS 103.154.178.192:8097",
        "SOCKS 38.156.14.34:999",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 188.0.167.195:8080",
        "SOCKS 103.28.121.58:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}