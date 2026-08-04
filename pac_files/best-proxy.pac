function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.59.44.192:9050",
        "SOCKS 38.135.122.198:2054",
        "SOCKS 195.19.52.187:1080",
        "SOCKS 8.220.205.172:4002",
        "SOCKS 66.151.32.105:1080",
        "SOCKS 13.140.164.179:3658",
        "SOCKS 13.140.164.179:3622",
        "SOCKS 8.220.205.172:1234",
        "SOCKS 104.154.186.48:80",
        "SOCKS 129.226.72.101:18080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 193.24.222.150:33500",
        "SOCKS 89.169.37.254:1080",
        "SOCKS 109.236.57.144:1080",
        "SOCKS 8.221.141.88:8080",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 47.85.37.60:1080",
        "SOCKS 176.37.107.86:11111",
        "SOCKS 85.174.84.22:1080",
        "SOCKS 47.91.121.127:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}