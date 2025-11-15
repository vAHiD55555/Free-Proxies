function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.64.122.99:7302",
        "SOCKS 47.76.237.63:1011",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 89.58.45.94:57167",
        "SOCKS 41.65.160.172:1977",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 89.58.45.94:10021",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 157.180.121.252:21551",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 45.70.201.64:999",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 72.10.160.94:23005",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}