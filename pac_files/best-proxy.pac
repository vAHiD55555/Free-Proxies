function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.220.204.92:100",
        "SOCKS 20.127.100.54:8080",
        "SOCKS 80.72.180.122:1080",
        "SOCKS 199.66.183.226:4145",
        "SOCKS 124.41.225.101:1080",
        "SOCKS 161.35.181.96:999",
        "SOCKS 49.13.87.123:1122",
        "SOCKS 103.133.26.73:3128",
        "SOCKS 103.210.161.8:1080",
        "SOCKS 202.58.77.114:8080",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 186.219.210.255:7080",
        "SOCKS 45.74.31.30:7328",
        "SOCKS 146.190.60.147:8007",
        "SOCKS 178.150.77.204:10801",
        "SOCKS 95.154.72.56:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 8.220.204.92:1200",
        "SOCKS 113.249.111.67:1080",
        "SOCKS 45.74.31.30:33905",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}