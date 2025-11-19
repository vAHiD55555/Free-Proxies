function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.49.22.23:1080",
        "SOCKS 89.58.45.94:44499",
        "SOCKS 89.58.45.94:14485",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 89.58.45.94:18186",
        "SOCKS 8.222.186.44:1111",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 152.53.171.242:45801",
        "SOCKS 152.53.171.242:10041",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 213.230.121.73:3128",
        "SOCKS 157.180.121.252:17242",
        "SOCKS 152.53.171.242:32255",
        "SOCKS 138.199.25.13:3906",
        "SOCKS 152.53.171.242:10003",
        "SOCKS 47.91.115.179:1000",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 103.174.122.197:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}