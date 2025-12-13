function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.59.225.188:12827",
        "SOCKS 52.202.30.36:80",
        "SOCKS 59.66.28.207:10810",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 190.6.54.12:6969",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 46.209.217.108:8088",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 135.181.203.208:80",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 157.10.53.91:60001",
        "SOCKS 54.221.172.63:80",
        "SOCKS 103.109.57.42:3629",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}