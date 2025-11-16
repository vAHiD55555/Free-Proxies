function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.158.27:25100",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 89.58.45.94:46597",
        "SOCKS 179.189.120.147:3128",
        "SOCKS 89.58.45.94:16951",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 157.180.121.252:21033",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 89.58.45.94:38785",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 8.219.129.31:1011",
        "SOCKS 89.58.45.94:14455",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 42.96.5.23:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}