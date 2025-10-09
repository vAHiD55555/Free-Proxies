function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 134.209.29.120:1080",
        "SOCKS 103.25.210.102:348",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 67.43.236.21:32215",
        "SOCKS 8.219.160.198:1011",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 103.109.96.250:2024",
        "SOCKS 185.146.1.35:3128",
        "SOCKS 113.108.37.115:7777",
        "SOCKS 78.12.220.164:9174",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 4.216.195.194:3128",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 41.174.96.38:32650",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 77.238.79.111:8080",
        "SOCKS 8.212.165.33:3333",
        "SOCKS 195.158.8.123:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}