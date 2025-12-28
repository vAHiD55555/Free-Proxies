function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 41.65.160.172:1976",
        "SOCKS 202.181.16.45:52929",
        "SOCKS 47.245.104.45:1011",
        "SOCKS 62.60.131.184:8081",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 89.46.249.253:53018",
        "SOCKS 184.95.220.42:1080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 185.118.51.133:3128",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 103.16.62.138:10888",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 62.60.131.183:11214",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}