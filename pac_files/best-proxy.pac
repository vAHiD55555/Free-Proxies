function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.114.78:5556",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 128.140.76.145:30157",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 124.197.21.223:3128",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 43.208.240.77:12587",
        "SOCKS 156.226.174.73:3128",
        "SOCKS 38.253.88.242:999",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 82.26.74.193:9004",
        "SOCKS 18.179.20.228:8181",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 157.20.244.78:8080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 47.250.56.98:19190",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}