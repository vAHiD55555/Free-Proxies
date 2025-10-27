function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.252:30497",
        "SOCKS 195.26.226.211:1080",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 103.127.223.126:1080",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 34.222.65.100:1976",
        "SOCKS 8.217.34.2:1011",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 152.53.36.101:29307",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 40.192.100.189:8141",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}