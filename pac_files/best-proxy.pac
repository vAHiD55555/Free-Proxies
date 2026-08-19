function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 213.165.43.73:46650",
        "SOCKS 8.220.136.174:8081",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 185.125.200.80:1090",
        "SOCKS 47.82.121.250:1011",
        "SOCKS 118.145.141.251:44122",
        "SOCKS 8.221.138.111:9080",
        "SOCKS 118.145.141.251:44076",
        "SOCKS 64.111.92.171:10101",
        "SOCKS 81.168.119.85:443",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 195.19.50.130:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 220.112.1.194:1088",
        "SOCKS 217.60.245.29:4080",
        "SOCKS 51.15.253.45:8080",
        "SOCKS 120.133.82.62:44022",
        "SOCKS 172.105.192.212:9080",
        "SOCKS 88.201.248.85:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}