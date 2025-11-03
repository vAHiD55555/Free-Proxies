function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.1.211.2:1080",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 20.27.15.111:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}