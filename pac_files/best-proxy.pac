function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.64.130:16379",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 103.39.51.190:8080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 8.218.36.48:1011",
        "SOCKS 67.43.236.19:26051",
        "SOCKS 47.243.80.108:1011",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 152.53.171.242:14483",
        "SOCKS 152.53.36.101:56789",
        "SOCKS 138.199.25.13:3903",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 201.230.121.244:999",
        "SOCKS 152.53.36.101:24075",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}