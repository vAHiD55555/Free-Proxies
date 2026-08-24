function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:9009",
        "SOCKS 45.74.31.42:10000",
        "SOCKS 118.145.141.251:44125",
        "SOCKS 118.145.141.251:44108",
        "SOCKS 152.89.104.11:1080",
        "SOCKS 175.27.252.26:1080",
        "SOCKS 118.145.141.251:44167",
        "SOCKS 45.95.233.128:1082",
        "SOCKS 143.47.59.115:9050",
        "SOCKS 124.83.43.145:8080",
        "SOCKS 45.74.31.30:44816",
        "SOCKS 47.90.149.238:8443",
        "SOCKS 92.42.15.29:1080",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 45.157.163.41:1080",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 185.214.135.169:1080",
        "SOCKS 95.217.167.252:11113",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 45.74.31.30:4228",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}