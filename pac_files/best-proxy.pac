function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 84.17.35.129:3128",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 36.255.98.160:23909",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 103.154.178.192:8097",
        "SOCKS 169.239.181.213:8888",
        "SOCKS 119.81.71.27:80",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 62.60.131.183:14041",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 72.10.160.91:9959",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 43.208.240.77:10034",
        "SOCKS 43.210.30.230:237",
        "SOCKS 185.123.143.251:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}