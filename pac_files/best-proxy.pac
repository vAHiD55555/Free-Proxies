function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.236.202.205:3128",
        "SOCKS 192.111.135.21:4145",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 51.11.240.222:8085",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 207.97.174.134:1080",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 82.223.165.28:4733",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 45.88.0.114:3128",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 45.189.252.240:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}