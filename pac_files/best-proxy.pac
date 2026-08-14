function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 129.158.48.4:9050",
        "SOCKS 45.77.37.39:2038",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 147.45.60.250:1082",
        "SOCKS 109.199.105.194:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 176.120.28.106:8080",
        "SOCKS 8.213.156.191:8443",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 163.61.58.150:1080",
        "SOCKS 152.228.134.176:48080",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 109.172.55.177:1082",
        "SOCKS 173.249.20.169:9060",
        "SOCKS 202.43.165.140:10802",
        "SOCKS 45.61.133.104:7777",
        "SOCKS 8.213.156.191:8888",
        "SOCKS 45.133.16.88:1080",
        "SOCKS 204.168.225.35:9080",
        "SOCKS 46.146.223.102:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}