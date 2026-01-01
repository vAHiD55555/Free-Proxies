function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.248.184.247:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 45.184.103.110:999",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 195.162.19.75:80",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 62.60.131.184:15857",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 124.197.21.223:3128",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 43.133.32.76:1777",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}