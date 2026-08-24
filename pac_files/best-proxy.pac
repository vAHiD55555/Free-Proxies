function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.248.81:1080",
        "SOCKS 152.53.194.105:1080",
        "SOCKS 177.10.202.115:35452",
        "SOCKS 45.74.31.42:9928",
        "SOCKS 45.192.9.27:1080",
        "SOCKS 118.145.141.251:44004",
        "SOCKS 45.74.31.30:4508",
        "SOCKS 118.145.141.251:44077",
        "SOCKS 45.74.31.30:8090",
        "SOCKS 185.109.244.69:8080",
        "SOCKS 37.187.140.119:3080",
        "SOCKS 45.74.31.30:5933",
        "SOCKS 118.145.141.251:44137",
        "SOCKS 45.74.31.30:8079",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 131.100.19.5:4321",
        "SOCKS 79.137.78.133:8005",
        "SOCKS 118.145.141.251:44030",
        "SOCKS 188.68.57.86:9050",
        "SOCKS 188.166.120.48:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}