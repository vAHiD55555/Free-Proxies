function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.123.101.174:3128",
        "SOCKS 178.170.43.129:8081",
        "SOCKS 202.96.165.47:7890",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 35.180.188.216:80",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 181.204.81.179:999",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 179.96.28.58:80",
        "SOCKS 157.66.81.111:3128",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 193.34.95.110:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}