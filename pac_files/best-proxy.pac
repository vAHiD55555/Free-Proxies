function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.112:5566",
        "SOCKS 89.58.45.94:38261",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 54.37.72.89:80",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 3.107.252.199:45157",
        "SOCKS 91.202.36.46:8083",
        "SOCKS 72.10.160.172:11223",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}