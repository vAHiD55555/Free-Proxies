function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.171.50.169:6688",
        "SOCKS 137.184.211.63:8081",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 198.23.236.47:1111",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 13.59.97.103:313",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 156.225.31.27:7890",
        "SOCKS 78.24.220.44:10000",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 121.40.231.103:7890",
        "SOCKS 213.165.61.247:10000",
        "SOCKS 67.205.153.110:51528",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}