function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.62:4145",
        "SOCKS 8.218.39.40:10800",
        "SOCKS 117.74.65.207:443",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 123.253.108.69:8999",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 181.115.67.3:999",
        "SOCKS 221.202.27.194:10807",
        "SOCKS 115.127.107.106:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}