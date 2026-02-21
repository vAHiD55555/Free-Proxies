function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.113.119.14:8080",
        "SOCKS 123.54.197.19:20760",
        "SOCKS 123.54.197.49:21970",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 177.234.217.237:999",
        "SOCKS 51.254.81.100:1080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 85.208.108.43:2094",
        "SOCKS 147.75.34.105:443",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 202.62.39.87:1080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 132.148.244.30:45157",
        "SOCKS 213.165.61.247:10000",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 185.133.239.244:32784",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}