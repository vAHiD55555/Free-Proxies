function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.14.247.185:3128",
        "SOCKS 118.145.141.251:44167",
        "SOCKS 213.148.6.12:7777",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 49.13.22.249:10808",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 65.21.252.66:10811",
        "SOCKS 80.93.62.239:1080",
        "SOCKS 118.145.141.251:44001",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 45.74.31.30:19531",
        "SOCKS 91.107.254.246:9082",
        "SOCKS 223.99.197.190:11012",
        "SOCKS 118.145.141.251:44015",
        "SOCKS 65.21.252.66:10808",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 118.145.141.251:44128",
        "SOCKS 45.74.31.30:4327",
        "SOCKS 58.187.192.47:1080",
        "SOCKS 152.228.134.176:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}