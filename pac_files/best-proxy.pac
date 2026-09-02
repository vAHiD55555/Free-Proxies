function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.147.42.50:3128",
        "SOCKS 192.73.242.77:9050",
        "SOCKS 49.13.22.249:10809",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 45.74.31.42:4443",
        "SOCKS 45.143.94.111:1080",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 43.160.242.118:3128",
        "SOCKS 65.21.252.66:10811",
        "SOCKS 185.158.251.251:50000",
        "SOCKS 45.74.31.30:15928",
        "SOCKS 5.181.181.208:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 201.165.172.3:1080",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 62.76.103.121:8001",
        "SOCKS 141.148.65.110:1081",
        "SOCKS 112.105.12.235:1111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}