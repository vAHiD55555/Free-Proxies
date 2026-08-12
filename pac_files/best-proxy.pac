function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.140.164.179:3530",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 103.156.75.246:8181",
        "SOCKS 80.211.131.230:9050",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 216.48.177.32:8080",
        "SOCKS 103.138.145.228:1999",
        "SOCKS 185.239.50.122:10808",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 110.235.240.223:1080",
        "SOCKS 2.56.178.88:808",
        "SOCKS 45.43.60.220:8080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 103.176.187.228:9090",
        "SOCKS 178.214.201.74:7080",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 13.140.164.179:3050",
        "SOCKS 62.171.162.111:80",
        "SOCKS 212.129.243.68:1143",
        "SOCKS 31.77.198.168:9000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}