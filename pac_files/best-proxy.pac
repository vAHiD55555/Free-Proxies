function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.222.170.146:1111",
        "SOCKS 69.17.8.19:3095",
        "SOCKS 45.121.50.118:1080",
        "SOCKS 65.20.79.228:40002",
        "SOCKS 89.22.226.183:1080",
        "SOCKS 45.74.31.42:4355",
        "SOCKS 45.74.31.42:15802",
        "SOCKS 176.193.47.202:2080",
        "SOCKS 80.64.27.68:1080",
        "SOCKS 123.189.113.178:1080",
        "SOCKS 116.147.74.123:7890",
        "SOCKS 172.98.20.229:1080",
        "SOCKS 69.174.54.141:10805",
        "SOCKS 45.74.31.46:4205",
        "SOCKS 8.130.36.163:8080",
        "SOCKS 45.74.31.42:5485",
        "SOCKS 91.107.165.73:8443",
        "SOCKS 45.67.84.116:9080",
        "SOCKS 144.31.185.67:1080",
        "SOCKS 84.200.89.140:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}