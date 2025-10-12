function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.226.156.148:20201",
        "SOCKS 2.186.116.14:8080",
        "SOCKS 181.209.116.186:7070",
        "SOCKS 45.77.156.171:9091",
        "SOCKS 45.174.94.26:999",
        "SOCKS 103.133.27.159:8085",
        "SOCKS 42.200.253.116:8080",
        "SOCKS 38.156.73.61:8080",
        "SOCKS 119.2.45.105:8080",
        "SOCKS 103.183.8.118:8090",
        "SOCKS 101.251.204.174:8080",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 202.5.36.241:1628",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 46.166.83.132:8081",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 178.165.42.166:3128",
        "SOCKS 38.54.9.151:1234",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 72.10.160.94:16137",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}