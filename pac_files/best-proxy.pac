function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.236.187.104:40355",
        "SOCKS 138.199.25.13:3903",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 138.199.25.13:3901",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 45.115.113.126:9090",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 34.124.190.108:8080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 157.175.197.28:8819",
        "SOCKS 182.160.106.205:1080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 154.21.205.214:8080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 162.144.74.156:3620",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}