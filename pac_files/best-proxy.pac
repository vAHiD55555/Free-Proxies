function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 80.253.246.238:6618",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 18.163.49.218:3030",
        "SOCKS 47.97.24.122:8222",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 152.53.36.101:33705",
        "SOCKS 89.46.249.146:8279",
        "SOCKS 113.212.109.40:1080",
        "SOCKS 202.5.46.17:6969",
        "SOCKS 103.247.240.34:8080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 186.215.87.194:30001",
        "SOCKS 8.217.111.249:1011",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 103.151.30.49:1080",
        "SOCKS 103.53.77.179:8050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}