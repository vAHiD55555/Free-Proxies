function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.89.68.78:9050",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 13.229.107.106:80",
        "SOCKS 36.255.98.158:7922",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 195.154.43.198:39522",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}