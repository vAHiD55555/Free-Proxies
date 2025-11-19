function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.185.2.45:4145",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 200.37.252.122:8080",
        "SOCKS 78.12.143.148:969",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 183.232.157.102:1100",
        "SOCKS 81.90.149.188:3128",
        "SOCKS 152.53.171.242:13019",
        "SOCKS 176.108.146.179:1080",
        "SOCKS 161.49.91.13:1337",
        "SOCKS 181.78.73.53:999",
        "SOCKS 89.58.45.94:29429",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 152.53.171.242:10053",
        "SOCKS 89.58.45.94:46065",
        "SOCKS 89.58.45.94:45247",
        "SOCKS 213.230.121.73:3128",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 89.58.45.94:15455",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}