function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:47833",
        "SOCKS 65.21.252.66:10808",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 47.254.36.213:5060",
        "SOCKS 185.236.22.192:9050",
        "SOCKS 151.185.41.195:8080",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 45.74.31.42:8044",
        "SOCKS 118.145.141.251:44043",
        "SOCKS 118.145.141.251:44039",
        "SOCKS 45.74.31.42:4707",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 128.199.104.190:41354",
        "SOCKS 45.74.31.30:8880",
        "SOCKS 37.187.140.119:3080",
        "SOCKS 47.250.177.202:4145",
        "SOCKS 14.225.204.32:10800",
        "SOCKS 49.13.22.249:10809",
        "SOCKS 110.235.248.81:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}