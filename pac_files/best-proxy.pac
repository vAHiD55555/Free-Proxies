function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.158.8.123:3128",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 42.118.1.7:16000",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 103.162.16.7:8080",
        "SOCKS 220.128.223.136:8082",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 8.213.156.191:3541",
        "SOCKS 170.130.202.134:3128",
        "SOCKS 8.210.117.141:8888",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 9.163.137.124:3128",
        "SOCKS 98.162.96.41:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}