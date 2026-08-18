function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.198.81.83:1080",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 27.155.93.29:5080",
        "SOCKS 202.95.15.6:1080",
        "SOCKS 95.216.117.50:9050",
        "SOCKS 47.83.197.140:20000",
        "SOCKS 110.235.240.223:1080",
        "SOCKS 92.205.186.129:1080",
        "SOCKS 115.127.53.114:1080",
        "SOCKS 153.80.240.37:8080",
        "SOCKS 110.235.246.62:1080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 146.56.158.84:22222",
        "SOCKS 38.175.197.50:5555",
        "SOCKS 144.31.126.44:1080",
        "SOCKS 45.76.164.255:1085",
        "SOCKS 154.37.221.222:10808",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 118.145.141.251:44177",
        "SOCKS 103.174.122.197:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}