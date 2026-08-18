function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 180.141.88.241:9009",
        "SOCKS 111.48.191.24:7890",
        "SOCKS 79.126.81.69:1080",
        "SOCKS 120.133.82.62:44105",
        "SOCKS 92.205.186.129:1080",
        "SOCKS 223.99.197.190:11012",
        "SOCKS 72.255.9.24:1080",
        "SOCKS 120.133.82.62:44182",
        "SOCKS 195.19.55.74:1080",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 2.144.6.22:9090",
        "SOCKS 15.237.108.20:54588",
        "SOCKS 103.206.68.241:1080",
        "SOCKS 45.130.201.172:1080",
        "SOCKS 118.145.141.251:44078",
        "SOCKS 84.201.144.65:10003",
        "SOCKS 168.119.173.104:41346",
        "SOCKS 163.5.214.119:9080",
        "SOCKS 37.18.73.60:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}