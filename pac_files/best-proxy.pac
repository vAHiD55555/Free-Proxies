function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.75.235.252:30431",
        "SOCKS 202.62.39.118:1080",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 202.5.41.2:21225",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 87.120.166.178:8080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 157.180.121.252:37497",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 157.180.121.252:23571",
        "SOCKS 157.180.121.252:13703",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 68.71.240.210:4145",
        "SOCKS 47.238.240.184:1100",
        "SOCKS 202.96.165.47:7890",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 98.185.94.94:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}