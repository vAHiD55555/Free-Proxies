function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.92:16287",
        "SOCKS 177.11.67.161:8999",
        "SOCKS 103.171.82.213:8080",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 78.12.220.164:9174",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 8.219.160.198:1011",
        "SOCKS 67.43.228.252:1173",
        "SOCKS 103.184.50.102:9090",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 67.43.236.19:25371",
        "SOCKS 47.79.43.52:1122",
        "SOCKS 4.216.195.194:3128",
        "SOCKS 41.33.203.227:1976",
        "SOCKS 14.248.84.131:8080",
        "SOCKS 14.251.13.0:8080",
        "SOCKS 34.141.27.50:3128",
        "SOCKS 103.31.235.197:1111",
        "SOCKS 103.156.14.15:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}