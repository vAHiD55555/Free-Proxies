function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.28.162.12:1080",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 85.174.84.22:1080",
        "SOCKS 201.139.115.206:8081",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 123.54.197.52:21702",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 51.89.68.78:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}