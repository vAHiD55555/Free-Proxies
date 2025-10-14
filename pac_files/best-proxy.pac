function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.205.215.44:4216",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 185.93.89.157:4122",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 47.79.93.202:1122",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 185.93.89.157:4025",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 185.93.89.145:8082",
        "SOCKS 132.145.75.68:4868",
        "SOCKS 171.247.157.141:1006",
        "SOCKS 47.82.82.25:5555",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 218.6.105.152:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}