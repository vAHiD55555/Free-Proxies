function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.219.101.244:3128",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 72.10.160.94:16137",
        "SOCKS 190.130.6.11:8080",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 77.221.134.220:3128",
        "SOCKS 179.48.80.9:8085",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 107.152.45.72:8888",
        "SOCKS 160.25.74.119:10354",
        "SOCKS 62.171.159.232:8888",
        "SOCKS 119.18.148.113:63636",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 193.227.129.215:52203",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 190.14.244.41:9992",
        "SOCKS 154.236.177.104:1976",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 34.16.129.212:3128",
        "SOCKS 54.226.156.148:20201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}