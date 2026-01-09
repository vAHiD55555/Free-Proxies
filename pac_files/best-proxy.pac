function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.198:5566",
        "SOCKS 72.214.108.67:4145",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 91.202.36.46:8081",
        "SOCKS 100.27.183.62:8080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 193.239.103.13:34415",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 147.45.60.60:80",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 91.236.74.10:8080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 137.184.228.194:40886",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}